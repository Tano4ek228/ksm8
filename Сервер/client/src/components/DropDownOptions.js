import React, { useContext} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import DropDownLine from "./DropDownLine";

const DropDownOptions = observer(() => {
	const {device} = useContext(Context)
	return (
					<div className="Panel_block">
						<div className="Panel_text_line">
							<h2>Название</h2>
							<h2>Цена</h2>
							<h2>НДС</h2>
							<h2>На складе</h2>
						</div>
						<DropDownLine/>
						<DropDownLine/>
						{/* {device.device.map(type => */}
							{/* <DropDownLine></DropDownLine> */}
						 {/* )} */}

						<div className="btn_add_tovar">
							<button className="buttonAddTovar">Добавить новое поле</button>
						</div>
					</div>
	)
})

export default DropDownOptions

