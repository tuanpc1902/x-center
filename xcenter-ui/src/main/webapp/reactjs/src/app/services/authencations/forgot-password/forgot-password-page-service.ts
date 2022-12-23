import http from "../../http-commons";

const forgotPassword = (params: any) => {
    return http.post("/forgot-password" , params )
}

const ForgotPasswordSlice = {
    forgotPassword
}

export default ForgotPasswordSlice;