import React, { useState } from 'react'
import { createAppl } from '../../http/DeviceApi'


const Zayavka = () => {
	const [name, setValue] = useState("")
	const [namber, setNamber] = useState("")
	const addAppl = () => {
    if (!name && !namber) alert("Вы не ввели имя и телефон!");
    else if (!name) alert("Вы не ввели имя");
    else if (!namber) alert("Вы не ввели номер телефона");
    else {
        createAppl({ name: name, number: namber });
        alert("Заявка успешно создана");
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
                                name="btn_zayavka"
                                onClick={() => addAppl()}
                                className="ostavit_zayavk"
                                defaultValue="Оставить заявку"
                            ></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Zayavka
