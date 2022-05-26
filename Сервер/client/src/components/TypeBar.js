import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import TovarFone from "../pages/images/AdminPanel/tovar_fone.png"
import Del from "../pages/images/AdminPanel/del.png"
import Edit from "../pages/images/AdminPanel/edit.png"
import Save from "../pages/images/AdminPanel/save.png"

const TypeBar = observer(() => {
	const { device } = useContext(Context)
	return (
		<form>
			{device.Types.map(type =>
				<div className="block">
					<div className="tovar_value">
						<img className="tovar_icon" src={TovarFone} alt=""></img>
						<input type="text" key={type.id} onChange value={type.name}></input>
					</div>
					<div className="btn_block">
						<img className="editButt" src={Edit} alt=""


						></img>

						<img src={Save} alt=""

						></img>

						<img src={Del} alt=""

						></img>

					</div>
				</div>
			)}
		</form>
	)
})

export default TypeBar