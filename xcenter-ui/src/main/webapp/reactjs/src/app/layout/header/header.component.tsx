import {withTranslation} from "react-i18next";
import {HeaderProps} from "./header.props";
import './skin/common-header-component.scss';

const HeaderComponent = (props: HeaderProps) => {

    return(

        <div id='header'>

        </div>
    )

}

export default withTranslation()(HeaderComponent);