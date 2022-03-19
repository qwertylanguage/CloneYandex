import styles from './index.module.scss';

export const Service = (props) => {
    return (
        <div className={styles.service}>
            <div
                className={styles.icon}
                style={{backgroundImage: `url(${props.icon})`}}
            />

            {props.title}
        </div>
    )
}