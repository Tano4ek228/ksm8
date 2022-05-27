import React from "react";
import { observer } from "mobx-react-lite";
import Save from "../pages/images/AdminPanel/save.png"
import Del from "../pages/images/AdminPanel/del.png"

const DropDownLine = observer(() => {
	return (
		<div className="Panel_value_line">
			<div className="product_info">
				<input type="text"></input>
				<input type="text"></input>
				<input type="text"></input>
				<input type="text"></input>
			</div>
			<div className="btn_block">
				<img className="btn_info" src={Save} alt=""></img>
				<img className="btn_info" src={Del} alt=""></img>
			</div>
		</div>
	)
})

export default DropDownLine