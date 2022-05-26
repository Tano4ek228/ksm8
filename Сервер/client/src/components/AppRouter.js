import React, { useContext } from "react";
import {Routes, Route} from 'react-router-dom'
import { Context } from "../index";
import { authRouters, publicRoutes } from "../routes";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
             {user.isAuth && authRouters.map(({path, Component})=>
                <Route key = {path} path={path} element={<Component/>}/>
            )}
             {publicRoutes.map(({path, Component})=>
                <Route key = {path} path={path} element={<Component/>}/>
            )}
            <Route 
            path="*"
            element={
                <p>Нет совпадения</p>
            }
            />
        </Routes>
    )  
}

export default AppRouter;