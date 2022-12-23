import http from "../../http-common";

const login = (params: any) => {
    return http.post("/login" , params )
}

const LoginPageService = {
    login
}

export default LoginPageService;