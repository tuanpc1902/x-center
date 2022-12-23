import React, {useEffect} from 'react'
import {BrowserRouter, Routes , Route, useNavigate} from "react-router-dom";
// import { ROUTERS } from './constant/routers.const';
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";
import {withTranslation} from "react-i18next";
import i18n from "i18next";
import cookies from 'react-cookies'
const Router = () => {
    let language = cookies.load("language");
    const history = useNavigate();
    const {titlePage} = useSelector((state: any) => state.CommonSlice)

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    useEffect(() => {
        changeLanguage(language);
    }, [language])

    const getPageTitle = () => {
        return "X-Center" + titlePage;
    }

    const renderRouter = (props: any) => {
        return (
            // <React.Fragment>
            <Routes >
                {/* <LayoutComponent {...props}>
                    <Routes >
                        <Route exact path={'/'}>
                            <UserInfoComponent/>
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Routes >
                </LayoutComponent> */}
            </Routes >
            // </React.Fragment>
        )
    }

    const renderUI = () => {

        return(
            // <BrowserRouter basename='/partner-ui'>
            //     <Helmet htmlAttributes={{class: 'custom-class'}}>
            //         <meta charSet="utf-8" />
            //         <link ref="shortcut icon" href={"./images/favicon.ico"}></link>
            //         <title>{getPageTitle()}</title>
            //     </Helmet>
            //     <Routes >
            //         <Route exact path={ROUTERS.LOGIN}>
            //             <LoginPageComponentComponent/>
            //         </Route>
            //         <Route exact path={ROUTERS.SECURITY_CODE}>
            //             <SecurityCodeComponent/>
            //         </Route>
            //         <Route exact path={ROUTERS.FORGOT_PASSWORD}>
            //             <ForgotPasswordComponent/>
            //         </Route>
            //         <Route path="/" render={(props) => renderRouter(props)} />
            //     </Routes >
            // </BrowserRouter>
            <>
            </>
        )
    }

    return(renderUI())
}

export default withTranslation()(Router);