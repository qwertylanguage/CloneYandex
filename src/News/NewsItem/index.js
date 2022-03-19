import styles from "./index.module.scss"

export const NewsItem = (props) => {
    return(
        <div className={styles.item}>
            <div className={styles.icon} style={{backgroundImage: `url(${props.icon})`}} />
            <a className={styles.title} href="/">{props.title}</a>
        </div>
    )
}