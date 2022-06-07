import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import { check } from "./http/userAPI";
import Header from "./pages/Header";

const App = observer(() => {
	const {user} = useContext(Context)
	const [loading,setLoading] = useState(true)

	useEffect(()=>{
		check().then(data=>{
			user.setUser(true)
			user.setIsAuth(true)
		}).finally (()=>setLoading(false))
	},[])

	return (
		<BrowserRouter>
			<Header/>
			<AppRouter/>
		</BrowserRouter>
	);
})

export default App;