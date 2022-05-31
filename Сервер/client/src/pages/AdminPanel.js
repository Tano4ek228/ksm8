import React, { useContext, useEffect } from "react";
import './style/style_AdminPanel.css';
import { AllTypeDevices, createType, fetchDevisec, fetchType } from "../http/DeviceApi";
import { Context } from "..";
import TypeBar from "../components/TypeBar";

const AdminPanel = () => {
	const { device } = useContext(Context)
	useEffect(() => {
		fetchType().then(data => device.setTypes(data))
		fetchDevisec().then((data => device.setDevices(data)))
		AllTypeDevices({id:"1"}).then((data => device.setTypeDevice(data)))
		{device.TypeDevice.map(type =>
			console.log(type.name)
		)}
	
	},[])
	const addType = () => {
		createType({ name: "" }).then(data => { "" })
		window.location.reload()
	}
	return (
		<div className="container_main">

		<div className="btn_panLine">
			<div className="btn_adm_panel">
				<a href="/lookapplications">Заявки</a>
			</div>
			<div className="btn_adm_panel">
				<a href="#">Редактирование товаров</a>
			</div>
		</div>

			<div className="main_text">
				<div className="text_inst">
					<h2>Инструменты</h2>
					<button className="buttonAdd" onClick={addType}>Добавить</button>
				</div>
				<div>
					<div className="blocks">
						<TypeBar />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminPanel;