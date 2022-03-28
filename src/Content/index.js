import styles from './index.module.scss';
import {News} from "../News";
import {Weather} from "../Weather";
import {Quotes} from "../Quotes";

export const Content = () => {
    return(
        <div className={styles.content}>
            <div className={styles.side}>
                <News />
            </div>

            <div className={styles.side}>
                <Weather />
                <Quotes />
            </div>
        </div>
    )
}