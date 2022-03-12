import {Service} from "../Service"
import "./index.scss"

export const ServicesPanel = () => {
    return (
        <div className="container">
            <Service title="Маркет" icon="http://yastatic.net/s3/home/services/block/market_new2.svg" />
            <Service title="Видео" icon="http://yastatic.net/s3/home/services/block/video_new.svg" />
            <Service title="Картинки" icon="http://yastatic.net/s3/home/services/block/images_new.svg" />
            <Service title="Новости" icon="http://yastatic.net/s3/home/services/block/news_new.svg" />
            <Service title="Карты" icon="http://yastatic.net/s3/home/services/block/maps_new3.svg" />
            <Service title="Переводчик" icon="http://yastatic.net/s3/home/services/block/translate_new.svg" />
            <Service title="Музыка" icon="http://yastatic.net/s3/home/services/block/music_new.svg" />
            <Service title="Программа" icon="http://yastatic.net/s3/home/services/block/tv.svg" />
            <Service title="Авто.ру" icon="http://yastatic.net/s3/home/services/block/autoru_new.svg" />
            <Service title="ещё" icon="http://yastatic.net/s3/home/services/block/market_new2.svg" />
        </div>
    )
}