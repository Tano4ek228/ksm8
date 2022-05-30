import React from "react";
import jbi_img from "./images/jbi/JBI.jpg"

const JBI = () => {
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

				</div>
				<h2>Заказать кольца ЖБИ в компании «КСМ-8»</h2>
				<ul class="delivery_beton">
					<li>Мы производим бетонные кольца всех типов и размеров, как правило на складе у нас порядка 400-500 позиций ЖБИ колец в Ростове-на-Дону.</li>
					<li>Отгрузка любых ЖБИ изделий происходит с территории завода и покупателю нет  повода сомневаться в целостности изделия, вы платите именно за новый, качественные кольца ЖБИ.</li>
					<li>Вся продукция подлежит сертификации и соответствует всем требованиям и соответствует с ГОСТ. </li>
					<li>Мы гарантируем качество нашей продукции и готовы предложить скидку постоянным клиентам до 20%.</li>
				</ul>
			</div>
			
			{/* Заявка */}
			<div className="zayavka_block">
				<div className="text_zayavka">
					<p>Есть вопросы?</p>
					<p>Оставьте заявку, и мы перезвоним Вам что бы ответить на все Ваши вопросы.</p>
				</div>

				<div class="zayavka_fone">
					<form action="">
						<div class="zayavka">
							<h2>Оставьте заявку:</h2>
							<div class="input_zayavka">
								<input type="text" name="name" class="name" placeholder="Имя:"></input>
								<input type="text" name="tel" class="tel" placeholder="Телефон: +7"></input>
							</div>
							<div class="btn_zayavka">
								<input type="submit" name="btn_zayavka" class="ostavit_zayavk" value="Оставить заявку">
								</input>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default JBI