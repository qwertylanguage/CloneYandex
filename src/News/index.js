import styles from './index.module.scss';
import {MediaContent} from "../MediaContent";
import {NewsItem} from "./NewsItem";
import {MediaContentButton} from "../MediaContentButton";

export const News = () => {
    return (
        <MediaContent>
            <div className={styles.header}>
                <div className={styles.icon}/>
                <MediaContentButton title="Сейчас в СМИ" />
                <MediaContentButton title="В Уфе" />
                <MediaContentButton title="Интересное" />
            </div>

            <NewsItem title="Байден назвал Пукина «смертоносным диктатором и бандитом»" icon="https://avatars.mds.yandex.net/get-ynews-logo/26056/1047-1478692902215-square/logo-square"/>
            <NewsItem title="Минобороны заявило об опытах с коронавирусами летучих мышей на Украине" icon="https://avatars.mds.yandex.net/get-ynews-logo/41096/1040-1640775230584-square/logo-square"/>
            <NewsItem title="Макрон заявил, что не отказывается от слов про «смерть мозга» НАТО" icon="https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square"/>
            <NewsItem title="Является ли Ирука Сэнсэй настоящим героем серии Naruto?" icon="https://avatars.mds.yandex.net/get-ynews-logo/26056/1048-1478692902313-square/logo-square"/>
            <NewsItem title="Лук стал дороже" icon="https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square"/>

            <button className={styles.all}>
                Показать ещё

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                     focusable="false" className="news__more-news-arrow">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M4.7896 7.94735C5.09476 7.555 5.66021 7.48431 6.05256 7.78948L10 10.8597L13.9475 7.78948C14.3398 7.48431 14.9053 7.555 15.2104 7.94735C15.5156 8.3397 15.4449 8.90515 15.0526 9.21031L10.5526 12.7103C10.2276 12.9631 9.77247 12.9631 9.44747 12.7103L4.94747 9.21031C4.55512 8.90515 4.48444 8.3397 4.7896 7.94735Z"
                          fill="currentColor"></path>
                </svg>
            </button>
        </MediaContent>
    )
}