import axios from "axios";
export default axios.create({
    baseURL: "localhost:8080/xcenter-webservice",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
});