import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const history = useNavigate()

    function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("https://backend-server-sandy.vercel.app/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // redirect
            history('/projects', {state: {message: 'Project created successfully!'}})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your projects for later add the services</p>
            <p>Form</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
        </div>
    )
}

export default NewProject