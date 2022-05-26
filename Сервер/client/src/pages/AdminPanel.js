import React, { useContext, useEffect } from "react";
import './style/style_AdminPanel.css';
import tovatImg from './images/AdminPanel/tovar_fone.png';
import tovatEdit from './images/AdminPanel/edit.png';
import tovarSave from './images/AdminPanel/save.png';
import toverDel from './images/AdminPanel/del.png';
import { fetchType } from "../http/DeviceApi";
import { Context } from "..";
import TypeBar from "../components/TypeBar";

const AdminPanel = () => {
	// this.myRef = React.createRef();
	// ref={this.myRef}
	const {device} = useContext(Context)
	fetchType().then(data => device.setTypes(data))	
	return (
		<div className="container_main">
			<div className="main_text">
				<div className="text_inst">
					<h2>Инструменты</h2>
					<button className="buttonAdd">Добавить</button>
				</div>
				<div className="all_blocks">
					<div className="blocks">
					<TypeBar/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminPanel;