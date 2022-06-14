import React, { useContext, useState } from "react";
import { Form, Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/const";
import { login, registration } from "../http/userAPI";
import "./style/style_login.css";
import { observer } from "mobx-react-lite";
import Modal from "../components/modal_window/Modal";
import { Context } from "..";

let error;

const Auth = observer(() => {
const location = useLocation();
const navigate = useNavigate();
const isLogin = location.pathname === LOGIN_ROUTE;
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [modalActive, setModalActive] = useState(false);
const {user} = useContext(Context)


  const click = async () => {
	try {
	  let data;
	  if (isLogin) {
		data = await login(email, password);
		setModalActive(true);
		error = "Вы успешно авторизовались";
		
		navigate("/shop");
	  } else {
		data = await registration(email, password);
		setModalActive(true);
		error = "Вы успешно зарегистрировались";
		navigate("/login");
	  }
	  user.setIsAuth(true)
	  user.setUser(data)
	} catch (e) {
	  setModalActive(true);
	  error = e.response.data.message;
	}
  };

  return (
	<Container className="section">
	  <Container className="platforma">
		<Card style={{ width: "26rem" }}>
		  <h2 className="vhod">{isLogin ? "Авторизация" : "Регистрация"}</h2>
		  <Form>
			<Form.Control
			  className="log login"
			  placeholder="Введите ваш email"
			  value={email}
			  onChange={(e) => setEmail(e.target.value)}
			/>
			<Form.Control
			  className="pass password"
			  placeholder="Введите ваш пароль"
			  value={password}
			  onChange={(e) => setPassword(e.target.value)}
			  type="password"
			/>

			<Container className="button_vhod">
			  <Button className="btn_vhod" onClick={click}>
				{isLogin ? "Войти" : "Создать аккаунт"}
			  </Button>
			</Container>
			<Row>
			  {isLogin ? (
				<div className="a_bottom">
				  Нет аккаунта?{" "}
				  <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
				</div>
			  ) : (
				<div>
				  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
				</div>
			  )}
			</Row>
			{isLogin ? (
			  <div>
				<NavLink to={LOGIN_ROUTE}>Забыли пароль?</NavLink>
			  </div>
			) : (
			  <div></div>
			)}
		  </Form>
		</Card>
	  </Container>

	  <Modal active={modalActive} setActive={setModalActive}>
		<p>{error}</p>
	  </Modal>

	</Container>
  );
});
export default Auth;
