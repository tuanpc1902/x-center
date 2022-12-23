import {withTranslation} from "react-i18next";
import {LeftMenuProps} from "./left-menu.props";
import './skin/left-menu-component.scss'

const LeftMenuComponent = (props: LeftMenuProps) => {
  return(
      <div id='left-menu'>

      </div>
  )
}

export default withTranslation()(LeftMenuComponent)