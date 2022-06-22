import { $host } from "./index";
 
export const createDevice = async (material) => {
	const {data} = await $host.post('api/material', material)
	return data;
}
 
export const fetchDevisec = async () => {
	const {data} = await $host.get('api/material')
	return data; 
}
export const AllTypeDevices = async (id) =>{
	const {data} = await $host.get('api/material/?typeId='+id)
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
export const deleteType = async (type) =>{
	const {data} = await $host.post('api/type/delete',type)
	return data;
}
export const updateType = async (type) =>{
	const {data} = await $host.post('api/type/update',type)
	return data;
}
export const createAppl = async (date) =>{
	const {data} = await $host.post('api/application',date)
	return data;
}
export const fetchAppl = async(date) =>{
	const {data} = await $host.get('api/application',date)
	return data;
}

export const deleteAppl = async(date) =>{
	const {data} = await $host.post('api/application/delete',date)
	return data;
}