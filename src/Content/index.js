import {MediaContent} from "../MediaContent";
import './index.scss';
import {News} from "../News";

export const Content = () => {
    return(
        <div className="content">
            <div className="content-left">
                <News />
            </div>

            <div className="content-right">
                <MediaContent>
                    <p>Right</p>
                </MediaContent>
            </div>
        </div>
    )
}