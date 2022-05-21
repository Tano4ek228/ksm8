import React, { useState } from "react";
import {Form,Button, Container} from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import {LOGIN_ROUTE} from "../utils/const"
import {login,registration} from "../http/userAPI"

const Auth = () => {
    const isLogin = window.location.href === LOGIN_ROUTE
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const click = async () =>{
        if(isLogin){
            const responce = await login()
        } else {
            const responce = await registration()
            console.log(responce)
        }
    }

    return (
            <Container 
                className="d-flex justify-content-center align-items-center"
                style={{height:window.innerHeight-54}}
            >
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isLogin? 'Авторизация': "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                    className="mt-3"
                    placeholder="Введите ваш email"
                    />
                    <Form.Control
                    className="mt-3"
                    placeholder="Введите ваш пароль"
                    />
                    <Button className = "mt-3" variant={"outline-success"}>
                        Войти
                    </Button>
                    </Form>
                </Card>
            </Container>
    )
}

export default Auth;