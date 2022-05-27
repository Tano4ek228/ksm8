import React, { useContext, useEffect } from "react";
import './style/style_AdminPanel.css';
import { createType, fetchDevisec, fetchType } from "../http/DeviceApi";
import { Context } from "..";
import TypeBar from "../components/TypeBar";

const AdminPanel = () => {
	const { device } = useContext(Context)
	var check = 1;
	useEffect(() => {
		fetchType().then(data => device.setTypes(data))
		fetchDevisec().then((data => device.setDevices(data)))
		// device.Devices.map(material =>
		// 	console.log(material.name))
	}, [check])
	const addType = () => {
		createType({ name: "" }).then(data => { "" })
		check++
	}
	return (
		<div className="container_main">
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