import { type } from "@testing-library/user-event/dist/type";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { deleteAppl } from "../http/DeviceApi";
import Del from "../pages/images/AdminPanel/del.png"

const looks = observer(() => {
    const {device} = useContext(Context)

    const deleteApp = (id) => {
        deleteAppl({ id })
        window.location.reload()
    }
    
	return (
        device.Apll.map(type =>
        <div key={type.id}>
					<div className="blocks">
					
						<div className="block">
							<div className="tovar_value applic">
								<input className="name_applic" type="text" value={type.name}></input>
								<input type="text" value={type.number}></input>
							</div>
							<div className="btn_block">
								<img src={Del} 
                                onClick={()=>deleteApp(type.id)}
                                alt=""></img>
							</div>
						</div>

					</div>
				</div>
                )
)})
    export default looks;