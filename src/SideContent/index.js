import styles from "./index.module.scss"
import {Login} from "../Login";

export const SideContent = () => {
    return(
        <div className={styles.container}>
            <Login/>
        </div>
    )
}