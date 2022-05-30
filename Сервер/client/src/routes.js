import Auth from "./pages/Auth"
import Shop from "./pages/Shop"
import Main from "./pages/Main"
import Basket from "./pages/Basket"
import Beton from "./pages/Beton"
import AdminPanel from "./pages/AdminPanel"
import {
	LOGIN_ROUTE, REGISTRATION_ROUTE,
	SHOP_ROUTE, BASKET_ROUTE, MAIN_ROUTE, BETON_ROUTE, ADMIN_PANEL_ROUTE
} from "./utils/const"

export const publicRoutes = [
	{
		path: REGISTRATION_ROUTE,
		Component: Auth
	},
	{
		path: SHOP_ROUTE,
		Component: Shop
	},
	{
		path: LOGIN_ROUTE,
		Component: Auth
	},
	{
		path: MAIN_ROUTE,
		Component: Main
	},
	{
		path: BETON_ROUTE,
		Component: Beton
	},
	
	{
		path: BASKET_ROUTE,
		Component: Basket
	},
]

export const authRouters = [
	{
		path: ADMIN_PANEL_ROUTE,
		Component: AdminPanel
	},
	{
		path: BASKET_ROUTE,
		Component: Basket
	}
]