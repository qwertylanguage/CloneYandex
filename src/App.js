import {SearchPanel} from "./SearchPanel"
import {ServicesPanel} from "./ServicesPanel";
import {Header} from "./Header";
import {Content} from "./Content";
import {SideContent} from "./SideContent";

const App = () => {
    return (
        <div
            style={{
                width: '100vw',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            className="App"
        >
            <Header />
            <SideContent />

            <div style={{width: '918px'}}>
                <ServicesPanel />
                <SearchPanel />
                <Content />
            </div>
        </div>
    )
}

export default App
