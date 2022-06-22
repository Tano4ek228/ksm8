import React from "react";
import Zayavka from "../components/zayavka/Zayavka";
import { NavLink } from "react-router-dom";
import {BETON_ROUTE} from '../utils/const';
import {FBS_ROUTE} from '../utils/const';
import {KERAMZITOBETON_ROUTE} from '../utils/const';
import {JBI_ROUTE} from '../utils/const';

const Shop = () => {
	let elements = [];
	let nameShop = ["Beton", "Fbs", "JBI", "KeramzitB"];
	let nameTovar = ["Бетон", "ФБС", "Кольца стеновые", "Керамзитобетон"];
	let nameLink = [BETON_ROUTE, FBS_ROUTE, JBI_ROUTE, KERAMZITOBETON_ROUTE];
	let desc_tovar = [
		'Производство и доставка высококачественного товарного бетона и раствора всех марок.',
		'Используются в качестве основных элементов при возведении стен и устройстве фундаментов.',
		'Предлагает вам сотрудничество в сфере поставок ЖБИ изделий собственного производства.',
		'Одна из разновидностей популярных лёгких бетонов, которые применяют в строительстве в наше время.'];
	for (let i = 0; i < nameShop.length; i++) {
		elements.push(
			<div class="products line_right line_bottom">
				<h2>{nameTovar[i]}</h2>
				<img src={`/images/main_tovar/${nameShop[i]}.jpg`} alt=""></img>
				<h3>
					{desc_tovar[i]}
				</h3>
				<div class="btn_wh">
					<NavLink to={nameLink[i]}>Подробнее</NavLink>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div class="container_products">
				<div class="prod_text">
					<h1 className="ShiftLeft h1_tovar_name">Продукция</h1>
				</div>
			</div>
				<div class="all">
					<div class="tovar_shop">
						<div class="tovar_line">
							{elements}
						</div>
					</div>
				<div class="container_main">
				<Zayavka/>
				</div>
			</div>
		</div>

	)
}

export default Shop;