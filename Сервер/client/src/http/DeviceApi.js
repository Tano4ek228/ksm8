import { $host } from "./index";
 
export const createDevice = async (material) => {
	const {data} = await $host.post('api/material', material)
	return data;
}
 
export const fetchDevisec = async () => {
	const {data} = await $host.get('api/material')
	return data; 
}
export const createType = async (type) => {
	const {data} = await $host.post('api/type', type)
	return data;
}
 
export const fetchType = async () => {
	const {data} = await $host.get('api/type')
	return data; 
}