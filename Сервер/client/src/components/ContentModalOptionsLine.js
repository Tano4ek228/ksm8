import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import Save from "../pages/images/AdminPanel/save.png"
import Del from "../pages/images/AdminPanel/del.png"
import { Context } from "..";

const ContentModalOptionsLine = observer(() => {
	const { device } = useContext(Context)
	return (
		<div>
			 {device.TypeDevice.map(type => 			
		<div className="Panel_value_line"  key={type.id}>
			<div className="product_info">
				<input placeholder={type.name}></input>
				<input placeholder={type.price}></input>
				<input placeholder={type.NDS}></input>
				<input placeholder={type.qant}></input>
			</div>
			<div className="btn_block">
				<img className="btn_info" src={Save} alt=""></img>
				<img className="btn_info" src={Del} alt=""></img>
			</div>
		</div>)}
		</div>
	)
})

export default ContentModalOptionsLine