import React from "react";

const Shop = () => {
	let elements = [];
	let nameShop = ["Beton", "Fbs", "JBI", "KeramzitB"];
	let nameTovar = ["Бетон", "ФБС", "Кольца стеновые", "Керамзитобетон"];
	for (let i = 0; i < nameShop.length; i++) {
		elements.push(
			<div class="products line_right line_bottom">
				<h2>{nameTovar[i]}</h2>
				<img src={`/images/main_tovar/${nameShop[i]}.jpg`} alt=""></img>
				<h3>
					Производство и доставка высококачественного товарного бетона и раствора всех марок.
				</h3>
				<div class="btn_wh">
					<a href="#">Подробнее</a>
				</div>
			</div>
		);
	};

	return (
		<div class="all">
			<div class="tovar">
				<div class="tovar_line">
					{elements}
				</div>
			</div>
			<div class="container_main">

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
		</div>

	)
}

export default Shop;