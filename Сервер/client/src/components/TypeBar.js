import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import TovarFone from "../pages/images/AdminPanel/tovar_fone.png"
import Del from "../pages/images/AdminPanel/del.png"
import Edit from "../pages/images/AdminPanel/edit.png"
import Save from "../pages/images/AdminPanel/save.png"
import { AllTypeDevices, deleteType, updateType } from "../http/DeviceApi";
import ContentModalOptions from "./ContentModalOptions";
import Modal_Admin from "./modal_admin/admin_popup"
import Beton from "../pages/Beton";


const TypeBar = observer(() => {
	const { device } = useContext(Context)
	const [value, setValue] = useState()
	const [typeId, setTypeId] = useState()
	const [typeName,setTypeName] = useState()
	const [ModalActive, setModalActive] = useState(false)

	const typeUpdate = (id) => {
		updateType({ name: value, id })
		console.log('Успешное обновление')
		window.location.reload()
	}
	const typeDelete = (id) => {
		deleteType({ id })
		window.location.reload()
	}

	const OnAddDown = (typeId,typeName) => {
		setTypeName(typeName)
		setTypeId(typeId);
		AllTypeDevices(typeId).then(data=>device.setTypeDevice(data));
		setModalActive(true);
	}

	return (
		<div>
		<Modal_Admin activeAdmin={ModalActive} setActiveAdmin={setModalActive} children={typeName} typeid={typeId}>
		</Modal_Admin>
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
							<img className="editButt" src={Edit} alt="" onClick={()=>OnAddDown(type.id, type.name)}></img>

							<img src={Save} alt="" onClick={() => typeUpdate(type.id)}></img>

							<img src={Del} alt="" onClick={() => typeDelete(type.id)}></img>

						</div>
					</div>
				</div>
			)}
		</div>
	)
})

export default TypeBar