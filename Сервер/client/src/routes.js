import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/const"

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
	}
]