import { $host } from "./index";

export const registration = (email,password)=>
{
    const responce =  $host.post('api/auth/registration',{email,password,role:'ADMIN'})
    return responce
}
export const login = (email,password)=>
{
    const responce = $host.post('api/auth/login',{email,password})
    return responce
}
export const check = ()=>
{
    const responce =  $host.post('api/auth/registration',{})
    return responce
}