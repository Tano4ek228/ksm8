import React, { useContext} from "react";
import { observer } from "mobx-react-lite";
import ContentModalOptionsLine from "./ContentModalOptionsLine";
import { createDevice } from "../http/DeviceApi";

const ContentModalOptions = observer((typeId) => {

	const createMaterials = (typeid) => {
		// createDevice({name:"",price:null,NDS:null,qant:null,typeId:typeid.typeId}).then(data => { "" })
		console.log("Второй");
	}

	return (
					<div className="Panel_block">
						<div className="Panel_text_line">
							<h2>Название</h2>
							<h2>Цена</h2>
							<h2>НДС</h2>
							<h2>На складе</h2>
						</div>
						<ContentModalOptionsLine/>
						<div className="btn_add_tovar">
							<button className="buttonAddTovar" 
							onClick={createMaterials(typeId)}
							>Добавить новое поле</button>
						</div>
					</div>
	)
})

export default ContentModalOptions

