import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [typeVisible,setTypeVisible] = useState(false)
    const [productVisible,setProductVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button onClick={ () => setTypeVisible(true) }>
                Добавить тип продукции
            </Button>
            <Button onClick={ () => setProductVisible(true)}>
                Добавить продукцию
            </Button>
            <CreateType show={typeVisible} onHide = {() => setTypeVisible(false)}/>
            <CreateProduct show={productVisible}  onHide  = {() => setProductVisible(false)}/>
        </Container>
    )
}

export default Admin;