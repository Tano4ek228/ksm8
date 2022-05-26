import React from "react";
import './style/style_AdminPanel.css';
import tovatImg from './images/AdminPanel/tovar_fone.png';
import tovatEdit from './images/AdminPanel/edit.png';
import tovarSave from './images/AdminPanel/save.png';
import toverDel from './images/AdminPanel/del.png';

const AdminPanel = () => {
	// this.myRef = React.createRef();
	// ref={this.myRef}
	return (
		<div class="container_main">
			<div class="main_text">
				<div class="text_inst">
					<h2>Инструменты</h2>
					<button className="buttonAdd">Добавить</button>
				</div>
				<div className="all_blocks">
					<div className="blocks">
						<form>
							<div className="block">

								<div className="tovar_value">
									<img className="tovar_icon" src={tovatImg} ></img>
									<input type="text"></input>
								</div>
								<div class="btn_block">
									<img src={tovatEdit}></img>
									<img src={tovarSave}></img>
									<img src={toverDel}></img>
								</div>
							</div>
						</form>
						<form>
							<div className="block">

								<div className="tovar_value">
									<img className="tovar_icon" src={tovatImg} ></img>
									<input type="text"></input>
								</div>
								<div class="btn_block">
									<img src={tovatEdit}></img>
									<img src={tovarSave}></img>
									<img src={toverDel}></img>
								</div>
							</div>
						</form>
						<form>
							<div className="block">

								<div className="tovar_value">
									<img className="tovar_icon" src={tovatImg} ></img>
									<input type="text"></input>
								</div>
								<div class="btn_block">
									<img src={tovatEdit}></img>
									<img src={tovarSave}></img>
									<img src={toverDel}></img>
								</div>
							</div>
						</form>
						<form>
							<div className="block">

								<div className="tovar_value">
									<img className="tovar_icon" src={tovatImg} ></img>
									<input type="text"></input>
								</div>
								<div class="btn_block">
									<img src={tovatEdit}></img>
									<img src={tovarSave}></img>
									<img src={toverDel}></img>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminPanel;