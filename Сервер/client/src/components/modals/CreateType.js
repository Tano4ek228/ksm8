import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

const CreateType = ({show,onHide}) => {
	return (
	<Modal show = {show} onHide = {onHide}>
    <Modal.Header closeButton>
    <Modal.Title>Добавить тип</Modal.Title>
    </Modal.Header>

     <Modal.Body>
    <Form>
        <Form.Control placeholder={"Введите название типа"}/>
    </Form>
     </Modal.Body>

    <Modal.Footer>
    <Button onClick={onHide}>Закрыть</Button>
    <Button onClick={onHide}>Добавить</Button>
    </Modal.Footer>
    </Modal>
	)
}

export default CreateType;