
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>

            },

            {
                path: '/login',
                element: <Login />
            }

        ]

    },
    


])

export default router