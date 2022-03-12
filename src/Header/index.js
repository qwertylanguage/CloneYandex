import './index.scss'

export const Header = () => {
    return (
        <header className='header'>
            <div className='section'>
                <button className='location'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor"
                              d="M13.07 3.58l-4 9.98a.5.5 0 0 1-.95-.06L7 9 2.5 7.88a.5.5 0 0 1-.06-.95l9.98-4a.5.5 0 0 1 .65.65z">
                        </path>
                    </svg>
                    Уфа
                </button>

                <div className='date'>13 марта, воскресенье 01:03</div>
            </div>

            <div className='section'>
                <button className='button'>
                    <svg className="market-cart__icon-svg" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.68 5.55H6.48l-.46-1.68a2.2 2.2 0 0 0-2.13-1.62H1.43a1.1 1.1 0 1 0 0 2.2H3.9l2.82 10.33a2.2 2.2 0 0 0 2.48 1.6l11.3-1.9a2.2 2.2 0 0 0 1.84-2.16V7.2c0-.91-.74-1.65-1.65-1.65zM5.83 22.05a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4zm11 0a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z"/>
                    </svg>
                </button>

                <button className='button'>
                    <svg style={{marginTop: '-4px'}} className="notifier__icon-svg" xmlns="http://www.w3.org/2000/svg" width="36" height="36" focusable="false">
                        <path className="notifier__clapper" d="M18 30a3 3 0 0 0 3-3c0-1.657-1.5 0-3-17-1.5 17-3 15.343-3 17a3 3 0 0 0 3 3z"/>
                        <path className="notifier__bell" d="M15.687 12.5l.3-.164a1.5 1.5 0 0 0 .75-1.021l.142-.712a.75.75 0 0 1 .736-.603h.77a.75.75 0 0 1 .736.603l.142.712a1.5 1.5 0 0 0 .75 1.02l.3.165a5.586 5.586 0 0 1 3.24 4.47l.54 4.863c.1.906.563 1.733 1.282 2.292l.354.275a1.5 1.5 0 0 1 .534 1.548L26.25 26a1.32 1.32 0 0 1-1.28 1H11.03a1.32 1.32 0 0 1-1.28-1l-.013-.052a1.5 1.5 0 0 1 .534-1.548l.354-.275a3.375 3.375 0 0 0 1.282-2.292l.54-4.864a5.586 5.586 0 0 1 3.24-4.469z"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}