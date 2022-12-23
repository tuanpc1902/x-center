import React, {useState} from 'react';
import {LoginPageProps} from "./login-page.props";
import {PageTranslationLanguage} from "../../../contants/page-translation-language";
import {withTranslation} from "react-i18next";
import LoginPageService from "../../../services/authencation/login/login-page-service";
import {LoginPageSlice} from "../../../slices/authencation/login/login-page-slice";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import cookies from 'react-cookies'

const LoginPageComponent = (props: LoginPageProps) => {

    const {t, i18n} = props;
    const {paramFilter} = useSelector((state: any) => state.LoginPageSlice)
    const actions = LoginPageSlice.actions;
    const dispatch = useDispatch();
    const history = useNavigate();
    const [isShowModal, setIsShowModal] = useState(false);
    const [className, setClassName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [focus, setFocus] = useState(false);

    const LoginHandler = () => {
        LoginPageService.login(paramFilter).then((response: any) => {
            const SERVER_CODE = response.data.status;
            if(SERVER_CODE === "OK"){
                history('/')
            }else if(SERVER_CODE === "FAIL"){
                setIsShowModal(true);
                setErrorMessage("Username or password not correct, Please try again!")
            }
            resetForm()
        }).catch(err => {
            console.log(err)
        })
    }

    const updateParamFilter = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        dispatch(actions.updateParamFilter({
            ...paramFilter,
            [name]: value
        }))
    }

    const onChangeLanguage = (e: any) => {
        const language = e.target.value;
        setClassName(language);
        cookies.save("language", language, {path: "/"});
        i18n.changeLanguage(language);
    }


    const resetForm = () => {
        dispatch(actions.updateParamFilter({
            username: '',
            password: ''
        }));
        setFocus(true);
    }

    const postCookie = () => {
        cookies.save("language", "vi-VN", { path: '/' });
    }

    const renderBody = () => {
        const placeholderUsername = t('username')
        const placeholderPassword = t('password')
        return (
            <div className='login-page-body'>
                <form className='frm-login'>
                    <table>
                        <td>
                            <tr>
                                <input type='text' placeholder={placeholderUsername} name="username" onChange={updateParamFilter} />
                            </tr>
                            <tr>
                                <input type='password' placeholder={placeholderPassword} name="password" onChange={updateParamFilter} />
                            </tr>
                            <tr>
                                <div className='forgot-password'>{t('forgotPassword')} ?</div>
                            </tr>
                            <tr>
                                <button type='button' disabled={!paramFilter.username || !paramFilter.password} onClick={LoginHandler} className='btn-submit'>{t('signIn')}</button>
                            </tr>
                            <tr className='Oauth2'>
                                <div>{t('orContinueWith')}</div>
                                <div className='link'>
                                    {/*<a href='./' className='google'>*/}
                                    {/*    <img src={google} alt='github' />*/}
                                    {/*</a>*/}
                                    {/*<a href='./' className='facebook'>*/}
                                    {/*    <img src={facebook} alt='github' />*/}
                                    {/*</a>*/}
                                    {/*<a href='./' className='github'>*/}
                                    {/*    <img src={github} alt='github' />*/}
                                    {/*</a>*/}
                                </div>
                            </tr>
                        </td>
                    </table>
                </form>
            </div>
        )
    }

    return(
        <div id='login-page-component'>
            <div className='login-page'>
                <div className='dialog'>
                    <div className='header'>
                        <div className='brand'>
                            <div className='logo'></div>
                        </div>
                        <div className='welcome'>
                            {t('welcomeTo')} X-Center
                        </div>
                    </div>
                    {renderBody()}
                    <div className='footer'>
                        <span className='policy'>
                            {t('youContinue')}<a className='hyper-link' href="https://fullstack.edu.vn/terms">{t('terms')}</a> {t('ofUse')}
                        </span>
                    </div>
                </div>
            </div>
            <div className="language">
                <button onClick={(e: any) => onChangeLanguage(e)} className={"btn vi-VN"} value="vi-VN"></button>
                <button onClick={(e: any) => onChangeLanguage(e)} className={"btn en-US"} value="en-US"></button>
            </div>
        </div>
    )
}

export default withTranslation(PageTranslationLanguage.LOGIN_PAGE)(LoginPageComponent);