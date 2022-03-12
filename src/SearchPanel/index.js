import './index.scss'
import {useState} from "react"

export const SearchPanel = () => {
    const [input, setInput] = useState('')

    const resetInput = () => {
        setInput('')
    }

    return (
        <form className='form'>
            <div className='input-section'>
                <input
                    value={input}
                    className='input'
                    onChange={(event) => setInput(event.target.value)}
                />

                <button
                    style={{...input.length === 0 ? {opacity: 0} : {}}}
                    className="clear-form"
                    type="button"
                    onClick={resetInput}
                />
            </div>

            <button className="search">
                Найти
            </button>
        </form>
    )
}