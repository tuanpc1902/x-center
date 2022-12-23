import { withTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import HeaderComponent from "./layout/header/header.component";
import './app.scss';
import LeftMenuComponent from "./layout/left/left-menu.component";

function App() {
    return (

        <div className="x-center-app">
            <div className='app'>
                <LeftMenuComponent/>
                <HeaderComponent/>
            </div>
        </div>
    );
}

export default withTranslation()(App);
