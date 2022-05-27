import React from "react";
import { observer } from "mobx-react-lite";
import DropDownLine from "./DropDownLine";

const DropDownOptions = observer(() => {
	return (
		<div className="container_main">
			<div className="main_text">
				<div className="text_inst">
					<h2>Инструменты</h2>
					<button className="buttonAdd">Добавить</button>
				</div>

				<div>
					<div className="Panel_block">
						<div className="Panel_text_line">
							<h2>Название</h2>
							<h2>Цена</h2>
							<h2>НДС</h2>
							<h2>На складе</h2>
						</div>

						<DropDownLine></DropDownLine>

						<div className="btn_add_tovar">
							<button className="buttonAddTovar buttonAdd">Добавить новое поле</button>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
})

export default DropDownOptions

