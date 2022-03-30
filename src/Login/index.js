import styles from "./index.module.scss"
import {MediaContent} from "../MediaContent";

export const Login = () => {
    return (
        <MediaContent style={{padding: '2px 4px', borderRadius: '7px'}}>
            <button className={styles.button}>
                <div className={styles.icon} style={{
                    backgroundImage: 'url(https://yastatic.net/s3/home-static/_/Z/6/nfVezDRqofwQZ5e669DSK84Tw.svg)',
                    position: 'absolute',
                    left: '8px'
                }} />
                Войти
            </button>

            <button className={styles.secondaryButton}>
                <div className={styles.icon} style={{
                    backgroundImage: 'url(https://yastatic.net/s3/home-static/_/7/b/D-rWsV7wtCTSK7KcKySHLQhwg.svg)',
                    paddingRight: '10px',
                }} />
                Почта
            </button>

            <button className={styles.secondaryButton}>
                <div className={styles.icon} style={{
                    backgroundImage: 'url(https://yastatic.net/s3/home-static/_/x/1/-TtNplC5O-tRjvwluglYJocbs.svg)',
                    paddingRight: '10px',
                }} />
                Диск
            </button>

        </MediaContent>
    )
}