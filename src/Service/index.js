import './index.scss'

export const Service = (props) => {
    return (
        <div className="service">
            <div
                className="service-icon"
                style={{backgroundImage: `url(${props.icon})`}}
            />

            {props.title}
        </div>
    )
}