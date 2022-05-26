import React from "react";
import './style/style_AdminPanel.css';
import tovatImg from './images/AdminPanel/tovar_fone.png';
import tovatEdit from './images/AdminPanel/edit.png';
import tovarSave from './images/AdminPanel/save.png';
import toverDel from './images/AdminPanel/del.png';

const AdminPanel = () => {
	// this.myRef = React.createRef();
	// console.log(Component.createRef());
	// ref={this.myRef}
	let elements = [];
	let images = [tovatImg]
	// let nameShop = ["Beton", "Fbs", "JBI", "Sheben"];
	let nameTovar = ["Бетон", "ФБС", "Кольца стеновые", "Керамзитобетон"];
	for (let i = 0; i < nameTovar.length; i++) {
		elements.push(
			<form>
				<div className="block">

					<div className="tovar_value">
						<img className="tovar_icon" src={images} alt=""></img>
						<input type="text" value={nameTovar[i]}></input>
					</div>
					<div className="btn_block">
						<img src={tovatEdit} className="editButt" alt=""></img>
						<img src={tovarSave} alt=""></img>
						<img src={toverDel} alt=""></img>
					</div>
					{/* <div className="block_show"></div> */}

				</div>
			</form>
		);
	}

	return (
		<div className="container_main">
			<div className="main_text">
				<div className="text_inst">
					<h2>Инструменты</h2>
					<button className="buttonAdd">Добавить</button>
				</div>
				<div>
					<div className="blocks">
						{elements}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminPanel;