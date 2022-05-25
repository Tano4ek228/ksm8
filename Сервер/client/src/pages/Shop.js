import React from "react";

const Shop = () => {
	let elements = [];
	let nameShop = ["Beton", "Fbs", "JBI", "Sheben"];
	let nameTovar = ["Бетон", "ФБС", "Кольца стеновые", "Керамзитобетон"];
	for (let i = 0; i < nameShop.length; i++) {
		elements.push(
			<div class="products line_right line_bottom">
				<h2>{nameTovar[i]}</h2>
				<img src={`/images/${nameShop[i]}.jpg`} alt=""></img>
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

				<div class="zayavka_block">
					<form action="">
						<div class="zayavka">
							<h2>Оставьте заявку:</h2>
							<div class="text_zayavka">
								<p>Имя:</p>
								<input type="text" name="name" class="name"></input>
								<p>Номер телефона:</p>
								<input type="text" name="tel" class="tel"></input>
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

export default Shop;