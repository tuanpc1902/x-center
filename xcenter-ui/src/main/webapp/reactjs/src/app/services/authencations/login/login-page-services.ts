import http from "../../http-commons";

const login = (params: any) => {
    return http.post("/login" , params )
}

const LoginPageService = {
    login
}

export default LoginPageService;