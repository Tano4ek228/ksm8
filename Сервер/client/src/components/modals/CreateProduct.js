import React from "react";
import { Modal,Form, Button } from "react-bootstrap";

const CreateProduct = (show,onHide) => {
	return (
		<Modal show = {show} onHide = {onHide} centered>
    <Modal.Header closeButton>
    <Modal.Title>Добавить продукцию</Modal.Title>
    </Modal.Header>

     <Modal.Body>
    <Form>
        <Form.Control placeholder={"Введите название продукции"}/>
    </Form>
     </Modal.Body>

    <Modal.Footer>
    <Button onClick={onHide}>Закрыть</Button>
    <Button onClick={onHide}>Добавить</Button>
    </Modal.Footer>
    </Modal>
	)
}

export default CreateProduct;