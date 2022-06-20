import React, { useContext} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import ContentModalOptionsLine from "./ContentModalOptionsLine";

const ContentModalOptions = observer(() => {
	const {device} = useContext(Context)
	return (
					<div className="Panel_block">
						<div className="Panel_text_line">
							<h2>Название</h2>
							<h2>Цена</h2>
							<h2>НДС</h2>
							<h2>На складе</h2>
						</div>
						<ContentModalOptionsLine/>
						<ContentModalOptionsLine/>
						<ContentModalOptionsLine/>
						{/* {device.device.map(type => */}
							{/* <DropDownLine></DropDownLine> */}
						 {/* )} */}

						<div className="btn_add_tovar">
							<button className="buttonAddTovar">Добавить новое поле</button>
						</div>
					</div>
	)
})

export default ContentModalOptions

