import React, { useState } from 'react'
import { createAppl } from '../../http/DeviceApi'
import Modal from "../modal_window/Modal.jsx";

let error;

const Zayavka = () => {
	const [name, setValue] = useState("")
	const [namber, setNamber] = useState("")
	const [modalActive, setModalActive] = useState(false);
	const addAppl = () => {
    if (!name && !namber) {
		setModalActive(true);
		error="Вы не ввели имя и телефон!";
	}
    else if (!name){
		setModalActive(true);
		error="Вы не ввели имя";
	}
    else if (!namber){
		setModalActive(true);
		error="Вы не ввели номер телефона";
	}
    else {
        createAppl({ name: name, number: namber });
		setModalActive(true);
        error="Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.";
		setValue('');
		setNamber('');
    }
	
};
    return (
        <div className="zayavka_block">
            <div className="text_zayavka">
                <p>Есть вопросы?</p>
                <p>
                    Оставьте заявку, и мы перезвоним Вам что бы ответить на все
                    Ваши вопросы.
                </p>
            </div>

            <div className="zayavka_fone">
                <form>
                    <div className="zayavka">
                        <h2>Оставьте заявку:</h2>
                        <div className="input_zayavka">
                            <input
                                type="text"
                                name="name"
                                className="name"
                                value={name}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="Имя:"
                            ></input>
                            <input
                                type="text"
                                name="tel"
                                className="tel"
                                value={namber}
                                onChange={(e) => setNamber(e.target.value)}
                                placeholder="Телефон: +7"
                            ></input>
                        </div>
                        <div className="btn_zayavka">
                            <input
								type='button'
                                name="btn_zayavka"
                                onClick={() => addAppl()}
                                className="ostavit_zayavk"
                                defaultValue="Оставить заявку"
                            ></input>
                        </div>
                    </div>
                </form>
            </div>
			<Modal active={modalActive} setActive={setModalActive}>
			<p>{error}</p>
	  		</Modal>
        </div>
    )
}

export default Zayavka
