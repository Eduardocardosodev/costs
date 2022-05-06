import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'


function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
            type="text"
            text="Name of service"
            name="name"
            placeholder="Put the of service"
            handleOnChange={handleChange} />

            <Input
            type="number"
            text="Budget of service"
            name="cost"
            placeholder="Put the total budget"
            handleOnChange={handleChange} />

            <Input
            type="text"
            text="Description of the service"
            name="description"
            placeholder="Write the service"
            handleOnChange={handleChange} />

            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ServiceForm