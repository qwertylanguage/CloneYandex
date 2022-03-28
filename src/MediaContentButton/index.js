import styles from './index.module.scss';

export const MediaContentButton = (props) => {
    return(
        <button className={`${styles.button}`}>
            {props.title}
        </button>
    )
}