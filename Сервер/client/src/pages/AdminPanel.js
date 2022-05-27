import React, { useContext } from "react";
import './style/style_AdminPanel.css';
import { fetchType } from "../http/DeviceApi";
import { Context } from "..";
import TypeBar from "../components/TypeBar";

const AdminPanel = () => {
	const { device } = useContext(Context)
	fetchType().then(data => device.setTypes(data))
	return (
		<div className="container_main">
			<div className="main_text">
				<div className="text_inst">
					<h2>Инструменты</h2>
					<button className="buttonAdd">Добавить</button>
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