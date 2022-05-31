import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../index";


const Header = observer(() => {
	const {user} = useContext(Context)

	const logOut = () =>{
		user.setUser({})
		user.setIsAuth(false)
		localStorage.clear()
		Navigate("/")
	}
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
					<li><a href="/delivery">Доставка</a></li>
					<li><a href="#kontaktsFooter">Контакты</a></li>
				</ul>
				{user.isAuth==false ?
				(<a className="button_sign_in" href="/login">Войти</a>)
				:(
				<div>
				<a className="button_sign_in" href="/" onClick={()=>logOut()}>Выйти</a>
				<a className="button_sign_in" href="/admin_panel">AdminPanel</a>
				</div>
				)
				}
				{/* <a className="header-cart" href="#">
					<img src="images/Корзина.svg" width="65"></img>
				</a> */}
			</div>
		</div>

			
	</header>
	)
})

export default Header;