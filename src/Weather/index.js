import styles from './index.module.scss';
import {MediaContent} from "../MediaContent";
import {MediaContentButton} from "../MediaContentButton";

export const Weather = () => {
    return(
        <MediaContent>
            <div>
                <MediaContentButton title="Погода" />
                <MediaContentButton title="Карта осадков" />
            </div>

            <div className={styles.block}>
                <div className={styles.icon} style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3e%3cdefs%3e%3cradialGradient cx='88.2%25' cy='11.31%25' fx='88.2%25' fy='11.31%25' r='51.28%25' gradientTransform='matrix(0 -.975 1 0 .77 .97)' id='a'%3e%3cstop stop-color='%239699C7' offset='0%25'/%3e%3cstop stop-color='%239499C9' stop-opacity='0' offset='100%25'/%3e%3c/radialGradient%3e%3cradialGradient cx='8.17%25' cy='-6.53%25' fx='8.17%25' fy='-6.53%25' r='65.22%25' gradientTransform='matrix(0 -.975 1 0 .15 .01)' id='b'%3e%3cstop stop-color='%239699C7' offset='0%25'/%3e%3cstop stop-color='%239499C9' stop-opacity='0' offset='100%25'/%3e%3c/radialGradient%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='c'%3e%3cstop stop-color='%23A4C5F4' offset='0%25'/%3e%3cstop stop-color='%23A7C7F2' offset='100%25'/%3e%3c/linearGradient%3e%3cradialGradient cx='88.2%25' cy='9.46%25' fx='88.2%25' fy='9.46%25' r='49.38%25' gradientTransform='matrix(0 -.975 1 0 .79 .95)' id='d'%3e%3cstop stop-color='%23486DA8' offset='0%25'/%3e%3cstop stop-color='%23486DA8' stop-opacity='0' offset='100%25'/%3e%3c/radialGradient%3e%3cradialGradient cx='14.44%25' cy='0%25' fx='14.44%25' fy='0%25' r='51.28%25' gradientTransform='matrix(0 -.975 1 0 .14 .14)' id='e'%3e%3cstop stop-color='%23486DA8' offset='0%25'/%3e%3cstop stop-color='%23486DA8' stop-opacity='0' offset='100%25'/%3e%3c/radialGradient%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='122.37%25' id='f'%3e%3cstop stop-color='%23A4C5F4' offset='0%25'/%3e%3cstop stop-color='%23A7C7F2' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath d='M29.07 21.55a4.29 4.29 0 1 0-.04-8.57 5.71 5.71 0 0 0-11.07-2.59 5.71 5.71 0 1 0-1.75 11.16h12.86z' fill='%2373A5E6' opacity='.32'/%3e%3cg transform='translate(3 10.55)'%3e%3cellipse fill='url(%23a)' opacity='.2' cx='7.5' cy='12.31' rx='6' ry='6.15'/%3e%3cellipse fill='url(%23b)' opacity='.2' cx='23.25' cy='14.62' rx='3.75' ry='3.85'/%3e%3cpath d='M7.5 18.46c-3.31 0-6-2.75-6-6.15 0-3.4 2.69-6.16 6-6.16a6 6 0 0 1 1.8.28 6.78 6.78 0 0 1 6.45-4.9 6.84 6.84 0 0 1 6.67 8 4.4 4.4 0 0 1 1.58-.3c2.49 0 4.5 2.07 4.5 4.62a4.56 4.56 0 0 1-4.5 4.61H7.5z' fill='url(%23c)'/%3e%3cellipse fill='url(%23d)' opacity='.34' cx='7.5' cy='12.31' rx='6' ry='6.15'/%3e%3cellipse fill='url(%23e)' opacity='.2' cx='24' cy='13.85' rx='4.5' ry='4.62'/%3e%3cellipse fill='url(%23f)' cx='15.75' cy='8.46' rx='6.75' ry='6.92'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
                }} />

                <div className={styles.value}>
                    −5°
                </div>

                <div className={styles.other}>
                    <div>ночью −7°</div>
                    <div>утром −7°</div>
                </div>
            </div>

            <div>
                <MediaContentButton title="Пробки" />
                <MediaContentButton title="Расписание" />
                <MediaContentButton title="Такси" />
            </div>

            <div className={styles.block} style={{
                marginBottom: 0
            }}>
                <div className={styles.icon} style={{
                    backgroundImage: 'url(https://yastatic.net/s3/home-static/_/W/6/3iKv0HwMyq3LM_iMXrpDbLZkM.svg)',
                    backgroundSize: '38px'
                }} />

                <div className={styles.value}>
                    0
                </div>

                <div className={styles.other}>
                    <div>На дорогах свободно</div>
                </div>
            </div>

        </MediaContent>
    )
}