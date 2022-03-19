import styles from './index.module.scss'
import {useState} from "react"

export const SearchPanel = () => {
    const [input, setInput] = useState('')

    const resetInput = () => {
        setInput('')
    }

    return (
        <form className={styles.form}>
            <div className={styles.section}>
                <input
                    value={input}
                    className={styles.input}
                    onChange={(event) => setInput(event.target.value)}
                />

                <button
                    style={{...input.length === 0 ? {opacity: 0} : {}}}
                    className={styles.clearForm}
                    type="button"
                    onClick={resetInput}
                />
            </div>

            <button className={styles.button}>
                Найти
            </button>
        </form>
    )
}