import styles from './index.module.scss'
import {MediaContent} from "../MediaContent";

export const Covid = () => {
    return(
        <MediaContent style={{padding: '14px 16px', borderRadius: '7px'}}>
            <div className={styles.title}>
                Башкортостан
            </div>

            <div className={styles.content}>
                <div>
                    <span className={styles.value}>+507</span> <br />
                    случаев выявлено
                </div>

                <div className={styles.diagramm}>
                    <svg className={styles.diagramm} xmlns="http://www.w3.org/2000/svg" focusable="false"
                         aria-label="Диаграмма" role="img" width="41"><title>Диаграмма</title>
                        <rect x="0" y="0.0%" width="2" height="100.0%" rx="1.5" ry="1.5" fill="#f3b45f"/>
                        <rect x="3" y="1.1%" width="2" height="98.9%" rx="1.5" ry="1.5" fill="#f3b45f"/>
                        <rect x="6" y="2.7%" width="2" height="97.3%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="9" y="3.8%" width="2" height="96.2%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="12" y="4.6%" width="2" height="95.4%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="15" y="6.7%" width="2" height="93.3%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="18" y="7.2%" width="2" height="92.8%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="21" y="8.0%" width="2" height="92.0%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="24" y="8.5%" width="2" height="91.5%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="27" y="9.0%" width="2" height="91.0%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="30" y="9.4%" width="2" height="90.6%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="33" y="9.6%" width="2" height="90.4%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="36" y="9.8%" width="2" height="90.2%" rx="1.5" ry="1.5" fill="#f8da84"/>
                        <rect x="39" y="10.0%" width="2" height="90.0%" rx="1.5" ry="1.5" fill="#f8da84"/>
                    </svg>
                </div>
            </div>

            <button className={styles.button}>
                <div className={styles.icon} style={{
                    backgroundImage: 'url(https://yastatic.net/s3/home/covid/speed/promo/info_vac1.svg)',
                }} />
                О вакцинации
            </button>
        </MediaContent>
    )
}