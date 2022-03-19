import styles from './index.module.scss'

export const MediaContent = (props) => {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}