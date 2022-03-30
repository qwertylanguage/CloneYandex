import styles from './index.module.scss'

export const MediaContent = (props) => {
    return (
        <div className={styles.wrapper} style={props.style}>
            {props.children}
        </div>
    )
}