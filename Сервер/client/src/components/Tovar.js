import React, { useContext } from "react";
import { Context } from "..";
import '../pages/style/tovar_price.css'

const Tovar = () => {
    const { device } = useContext(Context)
	return (
		<div>
			<div className="tovar_name_line">
				<h2>Тип</h2>
				<h2>Цена</h2>
				<h2>НДС</h2>
			</div>
            <table className="table_tovar">
            {device.TypeDevice.map(type => 		
                <tr className="tovar_tr">
                    <tb className="tovar_tb tb_right_botder">
                    {type.name}
                    </tb>
                    <tb className="tovar_tb tb_right_botder">
                    {type.price}
                    </tb>
                    <tb className="tovar_tb">
                    {type.NDS}
                    </tb>
                </tr>
                )}
            </table>
		</div>
	)
}

export default Tovar;