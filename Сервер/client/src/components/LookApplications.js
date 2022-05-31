import React from "react";
import '../pages/style/style_AdminPanel.css';
import TypeBar from "../components/TypeBar";
import Del from "../pages/images/AdminPanel/del.png"

const lookapplications = () => {
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
				<div>
					<div className="blocks">
					
						<div className="block">
							<div className="tovar_value applic">
								<input className="name_applic" type="text" placeholder='Имя'></input>
								<input type="text" placeholder='Телефон'></input>
							</div>
							<div className="btn_block">
								<img src={Del} alt=""></img>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default lookapplications;