import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (nickname, email, password, confirmPassword, name, surname)=> {
    const {data} = await $host.post('api/user/registration', {nickname, email, password, confirmPassword, name, surname})
    return jwtDecode(data.token)
}

export const login = async (email, password)=> {
    const {data} = await $host.post('api/user/login', {email, password})
    return jwtDecode(data.token)
}

export const auth = async ()=> {
    const response = await $host.post('api/user/auth', {email, password})
    return response
}