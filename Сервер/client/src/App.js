import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./pages/Header";
import Zayavka from "./components/zayavka/Zayavka";

function App() {
	return (
		<BrowserRouter>
		<Header/>
			<AppRouter/>
		</BrowserRouter>
	);
}

export default App;