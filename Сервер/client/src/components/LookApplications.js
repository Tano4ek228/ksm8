import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { fetchAppl } from "../http/DeviceApi";
import '../pages/style/style_AdminPanel.css';
import Appl from "./Appl"

const Lookapplications = () => {
	const {device} = useContext(Context)
	useEffect(()=>{
		fetchAppl().then(data=>device.setAppls(data))

	},[])

	return (
		<div className="container_main">

			<div className="btn_panLine">
				<div className="btn_adm_panel">
					<a href="#">Заявки</a>
				</div>
				<div className="btn_adm_panel">
					<a href="/admin_panel">Редактирование товаров</a>
				</div>
			</div>
		
			<div className="main_text">
				<div className="text_inst">
					<h2>Заявки</h2>
				</div>
			</div>
			<Appl/>
		</div>
	)
}

export default Lookapplications;