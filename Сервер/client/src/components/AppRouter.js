import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import { authRouters, publicRoutes } from "../routes";
import Modal from "./modal_window/Modal";

const error = "У вас нет доступа"

const AppRouter = observer (() => {
	const [modalActive, setModalActive] = useState(true);
	return (
		<Routes>
			
			{localStorage.getItem('data')==="ADMIN" || authRouters.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />}/>
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