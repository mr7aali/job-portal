import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Layout/Main";
import HomePage from "../Component/Pages/HomePage/HomePage";
import LogINLogOut from "../Component/Share/LogIN_LogOut/LogIN_LogOut";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/login',
                element:<LogINLogOut/>
            }
        ]
    }
])