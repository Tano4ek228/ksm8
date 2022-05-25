import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Shop from "./pages/Shop"
import Main from "./pages/Main"
import Basket from "./pages/Basket"
import {
	ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE,
	SHOP_ROUTE, BASKET_ROUTE, MAIN_ROUTE
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
		path: ADMIN_ROUTE,
		Component: Admin
	},
	{
		path: MAIN_ROUTE,
		Component: Main
	}
]
export const authRouters = [
	{
		path: ADMIN_ROUTE,
		Component: Admin
	},
	{
		path: BASKET_ROUTE,
		Component: Basket
	}
]