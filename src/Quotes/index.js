import styles from './index.module.scss';
import {MediaContentButton} from "../MediaContentButton";
import {MediaContent} from "../MediaContent";
import {QuotesItem} from "../QuotesItem";

export const Quotes = () => {
    return(
        <MediaContent>
            <MediaContentButton title="Котировки"/>

            <QuotesItem title="USD " date="29 марта" value="93,71 ₽" diff="" imageUrl={`url("https://avatars.mds.yandex.net/get-stocks/2399348/93ed30bd-3ea0-421f-81c1-9aafa2fa347c_1.png/3")`} />
            <QuotesItem title="EUR " date="29 марта" value="102,67 ₽" diff="" imageUrl={`url("https://avatars.mds.yandex.net/get-stocks/2367860/6373ec3d-63a3-4427-ab11-9a672961ffb6_23.png/3")`} />
            <QuotesItem title="USD MOEX" date="28 марта" value="89,75 ₽" diff="-6,25" imageUrl={`url("https://avatars.mds.yandex.net/get-stocks/1650573/a9b6e2ca-f35d-4533-8f79-ce21547b89f0_2002.png/3")`} />
            <QuotesItem title="EUR MOEX" date="28 марта" value="96,60 ₽" diff="-8,40" imageUrl={`url("https://avatars.mds.yandex.net/get-stocks/235043/153a6807-9434-4f88-bf99-9495bc31d159_2000.png/3")`} />
            <QuotesItem title="Нефть" date="28 марта" value="114,16 $" diff="−5,25%" imageUrl={`url("https://avatars.mds.yandex.net/get-stocks/1525529/1bc1e31d-080a-4785-9179-62044f24dd26_1006.png/3")`} />
        </MediaContent>
    )
}