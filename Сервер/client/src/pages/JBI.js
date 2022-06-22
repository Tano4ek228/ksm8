import React, { useContext } from "react";
import jbi_img from "./images/jbi/JBI.jpg"
import Zayavka from "../components/zayavka/Zayavka";
import { Context } from "..";
import { AllTypeDevices } from "../http/DeviceApi";
import Tovar from "../components/Tovar";

const JBI = () => {
	const { device } = useContext(Context)
	AllTypeDevices("2").then(data=>device.setTypeDevice(data));
	return(
		<div class="container_main">
			<div class="main_text">
				<h1 className="ShiftLeft h1_tovar_name">Кольца ЖБИ</h1>
				<p style={{ textAlign: "center" }}>
					<img src={jbi_img}></img>
				</p>
				<p>
					ООО «КСМ8» предлагает вам сотрудничество в сфере поставок ЖБИ изделий собственного производства. Перечень изделий и стоимость приведены в таблице прайса.
				</p>

				<h1 className="h1Tovarname">Цена на кольца бетонные за 1 шт в Ростове-на-Дону</h1>
				<div className="beton_info">
				<Tovar/>
				</div>
				<h2>Заказать кольца ЖБИ в компании «КСМ-8»</h2>
				<ul class="delivery_beton">
					<li>Мы производим бетонные кольца всех типов и размеров, как правило на складе у нас порядка 400-500 позиций ЖБИ колец в Ростове-на-Дону.</li>
					<li>Отгрузка любых ЖБИ изделий происходит с территории завода и покупателю нет  повода сомневаться в целостности изделия, вы платите именно за новый, качественные кольца ЖБИ.</li>
					<li>Вся продукция подлежит сертификации и соответствует всем требованиям и соответствует с ГОСТ. </li>
					<li>Мы гарантируем качество нашей продукции и готовы предложить скидку постоянным клиентам до 20%.</li>
				</ul>
			</div>
			
			<Zayavka/>
			
		</div>
	)
}

export default JBI