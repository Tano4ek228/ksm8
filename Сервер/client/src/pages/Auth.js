import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import { NavLink, useLocation } from "react-router-dom"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/const"
import { login, registration } from "../http/userAPI"
import './style_login.css';

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	const click = async () => {
		if (isLogin) {
			const responce = await login()
		} else {
			const responce = await registration()
			console.log(responce)
		}
	}

	return (
		<Container
			className="section"
		>
			<Container
				className="platforma"
			>
				<Card style={{ width: '26rem' }}>
					<h2 className="vhod">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
					<Form>
						<Form.Control
							className="log login"
							placeholder="Введите ваш email"
						/>
						<Form.Control
							className="pass password"
							placeholder="Введите ваш пароль"
						/>

						<Container className="button_vhod">
							<Button className="btn_vhod">
								{isLogin ? 'Войти' : 'Зарегистрироваться'}
							</Button>
						</Container>
						<Row>
							{isLogin ?
								<div className="a_bottom">
									Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
								</div>
								:
								<div>
									Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
								</div>
							}
						</Row>
						{isLogin ?
							<div>
								<NavLink to={LOGIN_ROUTE}>Забыли пароль?</NavLink>
							</div>
							:
							<div>

							</div>
						}
					</Form>
				</Card>
			</Container>
		</Container>
	)
}
export default Auth;