import "./index.scss";

export const NewsItem = (props) => {
    return(
        <div className="news-item">
            <div className="news-item-icon" style={{backgroundImage: `url(${props.icon})`}} />
            <a className="news-item-title" href="/">{props.title}</a>
        </div>
    )
}