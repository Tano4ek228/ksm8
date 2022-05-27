import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import TovarFone from "../pages/images/AdminPanel/tovar_fone.png"
import Del from "../pages/images/AdminPanel/del.png"
import Edit from "../pages/images/AdminPanel/edit.png"
import Save from "../pages/images/AdminPanel/save.png"
import { deleteType, updateType } from "../http/DeviceApi";


const TypeBar = observer(() => {
	const { device } = useContext(Context)
	const [value,setValue] = useState('')
	const typeUpdate = (id) =>{
		updateType({name:value,id})
		console.log({value,id})
		console.log('Успешное обновление')
	}
	const typeDelete = (id) =>{
		deleteType({id})
	}
	return (
		<form >
			{device.Types.map(type =>
				<div className="block" id={type.id} key={type.id}>
					<div className="tovar_value">
						<img className="tovar_icon" src={TovarFone} alt=""></img>
						<input type="text" placeholder={type.name}  
						onChange={e => setValue(e.target.value)}
						></input>
					</div>
					<div className="btn_block">
						<img className="editButt" src={Edit} alt=""


						></img>

						<img src={Save} alt=""
						onClick={()=>typeUpdate(type.id)}
						></img>

						<img src={Del} alt=""
						onClick={() => typeDelete(type.id)}
						></img>

					</div>
				</div>
			)}
		</form>
	)
})

export default TypeBar