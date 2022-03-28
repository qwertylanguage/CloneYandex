import styles from './index.module.scss';

export const QuotesItem = (props) => {
    return(
        <div className={styles.item}>
            <div className={styles.sectionLeft}>
                <div className={styles.title}>
                    {props.title}
                </div>

                <div className={styles.subtitle}>
                    {props.date}
                </div>
            </div>

            <div className={styles.chart} style={{backgroundImage: props.imageUrl}} />

            <div className={styles.section}>
                <div className={styles.title}>
                    {props.value}
                </div>

                <div className={styles.subtitleRight}>
                    {props.diff}
                </div>
            </div>
        </div>
    )
}