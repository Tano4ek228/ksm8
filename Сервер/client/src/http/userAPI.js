import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (email, password) => {
	const responce = $host.post('api/user/registration', { email, password, role: 'ADMIN' })
	localStorage.setItem('token',(await responce).data.token)
	return jwt_decode((await responce).data.token)
}
export const login = async (email, password) => {
	const responce = $host.post('api/user/login', { email, password })
	localStorage.setItem('token',(await responce).data.token)
	return jwt_decode((await responce).data.token)
}
export const check = async () => {
	const responce = $authHost.get('api/user/auth')
	localStorage.setItem('token',(await responce).data.token)
	return jwt_decode((await responce).data.token)
}