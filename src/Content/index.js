import {MediaContent} from "../MediaContent";
import styles from './index.module.scss';
import {News} from "../News";

export const Content = () => {
    return(
        <div className={styles.content}>
            <div>
                <News />
            </div>

            <div>
                <MediaContent>
                    <p>Right</p>
                </MediaContent>
            </div>
        </div>
    )
}