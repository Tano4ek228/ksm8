import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import TovarFone from "../pages/images/AdminPanel/tovar_fone.png"
import Del from "../pages/images/AdminPanel/del.png"
import Edit from "../pages/images/AdminPanel/edit.png"
import Save from "../pages/images/AdminPanel/save.png"
import { AllTypeDevices, deleteType, updateType } from "../http/DeviceApi";
import DropDownOptions from "./DropDownOptions";


const TypeBar = observer(() => {
	const { device } = useContext(Context)
	const [value,setValue] = useState('')
	const [typeId,setTypeId] = useState()
	const [DropDown, setDrowDown] = useState()


	const typeUpdate = (id) =>{
		updateType({name:value,id})
		console.log('Успешное обновление')
	}
	const typeDelete = (id) =>{
		deleteType({id})
	}
	
	const  OnAddDown = (typeId) =>{
		setDrowDown(<DropDownOptions/>)
		setTypeId(typeId)
	}
	return (
		<form >
			{device.Types.map(type =>
			<div>
				<div className="block" id={type.id} key={type.id}>
					<div className="tovar_value">
						<img className="tovar_icon" src={TovarFone} alt=""></img>
						<input type="text" placeholder={type.name}  
						onChange={e => setValue(e.target.value)}
						></input>
					</div>
					<div className="btn_block">
						<img className="editButt" src={Edit} alt=""
						onClick={OnAddDown}

						></img>

						<img src={Save} alt=""
						onClick={()=>typeUpdate(type.id)}
						></img>

						<img src={Del} alt=""
						onClick={() => typeDelete(type.id)}
						></img>

					</div>
				</div>
								{DropDown}
									</div>
			)}
		</form>
	)
})

export default TypeBar