import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { Context } from "../index";
import Main from "../pages/Main";
import Shop from "../pages/Shop";
import { authRouters, publicRoutes } from "../routes";
import Modal from "./modal_window/Modal";

const error = "У вас нет доступа"

const AppRouter = observer (() => {
	const { user } = useContext(Context)
	const [modalActive, setModalActive] = useState(true);
	return (
		<Routes>
			
			{localStorage.getItem('data')==="ADMIN" && authRouters.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />}


				/>
			)}
			{publicRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}
			<Route
				path="*"
				element={
					<div>
					<Modal active={modalActive} setActive={setModalActive}>
					<p>{error}</p>
				  	</Modal>
					  </div>
				}
				/>
		</Routes>
	)
})

export default AppRouter;