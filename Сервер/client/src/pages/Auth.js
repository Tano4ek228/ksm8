import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/const"
import { login, registration } from "../http/userAPI"
import './style/style_login.css';
import { observer } from "mobx-react-lite"

const Auth = observer(() => {
	const location = useLocation()
	const navigate = useNavigate()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	const click = async () => {
		try {
			let data
			if (isLogin) {
				data = await login(email, password)
				alert("Вы успешно авторизовались")
				navigate("/")
			} else {
				data = await registration(email, password)
				navigate("/login")
			}
		}

		catch (e) {
			alert(e.response.data.message)
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
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<Form.Control
							className="pass password"
							placeholder="Введите ваш пароль"
							value={password}
							onChange={e => setPassword(e.target.value)}
							type="password"
						/>

						<Container className="button_vhod">
							<Button className="btn_vhod" onClick={click}>
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
})
export default Auth;