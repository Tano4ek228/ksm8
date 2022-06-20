import React from 'react'
import './admin_popup.css'
import ContentModalOptions from "../ContentModalOptions";
import exit from '../../pages/images/AdminPanel/del.png'

const Modal_Admin = ({ activeAdmin, setActiveAdmin, children }) => {
    return (
        <div className={activeAdmin ? 'AdminModal active' : 'AdminModal'} onClick={() => setActiveAdmin(false)}>
            <div className={activeAdmin ? 'AdminModal_content active' : 'AdminModal_content'} onClick={(e) => e.stopPropagation()}>
				<img src={exit} onClick={() => setActiveAdmin(false)} alt="" />
				<div className='topPlug'>
					<h2>Керамзитобетон</h2>
				</div>
				<ContentModalOptions/>	
			</div>
        </div>
    )
}

export default Modal_Admin