import styles from './Home.module.css'
import saving from '../layout/img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to the <span>Costs</span></h1>
            <p>Start to manage your projects right now</p>
            <LinkButton to='/newproject' text="Criar Projeto" />
            <img src={saving}></img>
        </section>
    )
}

export default Home