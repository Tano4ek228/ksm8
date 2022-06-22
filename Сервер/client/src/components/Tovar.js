import React, { useContext } from "react";
import { Context } from "..";

const Tovar = () => {
    const { device } = useContext(Context)
	return (
		<div >
            <table>
            {device.TypeDevice.map(type => 		
                <tr key={type.id}>
                    <tb>
                    {type.name}
                    </tb>
                    <tb>
                    {type.price}
                    </tb>
                    <tb>
                    {type.NDS}
                    </tb>
                </tr>
                )}
            </table>
		</div>
	)
}

export default Tovar;