import Auth from "./pages/Auth"
import Shop from "./pages/Shop"
import Main from "./pages/Main"
import Basket from "./pages/Basket"
import Beton from "./pages/Beton"
import AdminPanel from "./pages/AdminPanel"
import Fbs from "./pages/Fbs"
import Jbi from "./pages/JBI"
import Keramzitobeton from "./pages/Keramzitobeton"
import AutoPump from "./pages/AutoPump"
import LookApplications from "./components/LookApplications"
import Delivery from "./pages/Delivery"
import {
	LOGIN_ROUTE, REGISTRATION_ROUTE,
	SHOP_ROUTE, BASKET_ROUTE, MAIN_ROUTE, ADMIN_PANEL_ROUTE,
	BETON_ROUTE, FBS_ROUTE, JBI_ROUTE, KERAMZITOBETON_ROUTE,
	AUTOBETONONASOS_ROUTE,LOOKAPPLICATIONS_ROUTE,DELIVERY_ROUTE
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
	{
		path: FBS_ROUTE,
		Component: Fbs
	},
	{
		path: JBI_ROUTE,
		Component: Jbi
	},
	{
		path: KERAMZITOBETON_ROUTE,
		Component: Keramzitobeton
	},
	{
		path: AUTOBETONONASOS_ROUTE,
		Component: AutoPump
	},
	{
		path: DELIVERY_ROUTE,
		Component: Delivery
	}
]

export const authRouters = [
	{
		path: ADMIN_PANEL_ROUTE,
		Component: AdminPanel
	},
	{
		path: LOOKAPPLICATIONS_ROUTE,
		Component: LookApplications
	}
]