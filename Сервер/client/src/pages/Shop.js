import React from "react";
import Zayavka from "../components/zayavka/Zayavka";

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
			<Zayavka/>

			</div>
		</div>

	)
}

export default Shop;