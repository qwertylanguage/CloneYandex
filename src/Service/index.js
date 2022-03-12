import './index.scss'

export const Service = (props) => {
    return (
        <div className="service">
            <div
                className="icon"
                style={{backgroundImage: `url(${props.icon})`}}
            />

            {props.title}
        </div>
    )
}