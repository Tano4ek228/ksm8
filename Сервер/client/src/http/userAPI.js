import { $host } from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (email,password)=>
{
    const responce =  $host.post('api/user/registration',{email,password,role:'ADMIN'})
    return jwt_decode((await responce).data.token)
}
export const login = async (email,password)=>
{
    const responce = $host.post('api/user/login',{email,password})
    return jwt_decode((await responce).data.token)
}
export const check = ()=>
{
    const responce =  $host.post('api/auth/registration',{})
    return responce
}