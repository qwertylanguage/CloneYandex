import styles from "./index.module.scss"
import {Login} from "../Login";
import {MediaContent} from "../MediaContent";
import {Covid} from "../Covid";

export const SideContent = () => {
    return(
        <div className={styles.container}>
            <Login />

            <div className={styles.hover}>
                <MediaContent style={{padding: '2px 4px', borderRadius: '7px'}}>
                    <div className={styles.buttonLink}>
                        <div
                            className={styles.icon}
                            style={{background: 'url("//yastatic.net/s3/home/notifications/big/zen.svg") no-repeat 50% 50%'}}
                        />

                        Ваш канал в Дзене
                    </div>
                </MediaContent>
            </div>

            <div className={styles.hover}>
                <MediaContent style={{padding: '2px 4px', borderRadius: '7px'}}>
                    <div className={styles.buttonLink}>
                        <div
                            className={styles.icon}
                            style={{background: 'url(https://yastatic.net/s3/home-static/_/b/q/uyhbff3FsvR1n380s8eZAkOtI.svg) no-repeat 50% 50%'}}
                        />

                        Попробовать Плюс
                    </div>
                </MediaContent>
            </div>

            <div className={styles.hover}>
                <Covid />
            </div>
        </div>
    )
}