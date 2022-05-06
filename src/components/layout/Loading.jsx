import loading from '../layout/img/loading.svg'

import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} />
        </div>
    )
}

export default Loading