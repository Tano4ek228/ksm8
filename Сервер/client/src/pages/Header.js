import React from "react";

const Header = () => {
	return (
	<header id="header" className="header">
		<div className="header-container">

			<div className="header-line">
				<a className="logo" href="/">
					<img src="images/header-logo.jpg" width="175px" height="50px"></img>
				</a>

				<ul className="header-menu">
					<li>
						<a href="/Shop">Продукция</a>
						<ul className="drop-down_menu">
							<div className="drop-down_menu_bg">
								<li><a href="/beton">Бетон</a></li>
								<li><a href="/jbi_koltsa">Кольца ЖБИ</a></li>
								<li><a href="/fbs_blocks">Блоки ФБС</a></li>
								<li><a href="/keramzitobeton">Керамзитобетон</a></li>
								<li><a href="/autopump">Автобетононасос</a></li>
							</div>
						</ul>
					</li>
					<li><a href="#">Прайс</a></li>
					<li><a href="#">Доставка</a></li>
					<li><a href="#">Контакты</a></li>
					<li><a href="/admin_panel">Телефон</a></li>
				</ul>

				<a className="button_sign_in" href="/login">Войти</a>

				<a className="header-cart" href="#">
					<img src="images/Корзина.svg" width="65"></img>
				</a>
			</div>
		</div>

			
	</header>
	)
}

export default Header;