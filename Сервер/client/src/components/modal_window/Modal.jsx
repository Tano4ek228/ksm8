import React from 'react'
import './modal.css'
import exit from '../../pages/images/AdminPanel/del.png'

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)} >
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()} >
                <img src={exit} onClick={() => setActive(false)} alt=""/>
                <p>{children}</p>
                <button className="btn_modal" onClick={() => setActive(false)}>ОК</button>
            </div>
        </div>
    )
}

export default Modal
