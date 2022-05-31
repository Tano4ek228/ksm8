import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom'
import { Context } from "../index";
import Main from "../pages/Main";
import { authRouters, publicRoutes } from "../routes";

const AppRouter = observer (() => {
	const { user } = useContext(Context)
	return (
		<Routes>
			
			{user.isAuth && authRouters.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />}


				/>
			)}
			{publicRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}
			<Route
				path="*"
				element={<div>Нет сопадений</div>}
			/>
		</Routes>
	)
})

export default AppRouter;