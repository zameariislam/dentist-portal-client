
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appoinment from "../pages/Appoinment/Appoinment/Appoinment";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/appoinment',
                element: <Appoinment />
            }


        ]

    },



])

export default router