
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appoinment from "../pages/Appoinment/Appoinment/Appoinment";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import DasboardLayout from "../Layout/DasboardLayout";
import MyAppoinment from "../pages/Dashboard/MyAppoinment/MyAppoinment";




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
            },
            {
                path: '/signup',
                element: <Signup />
            }


        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DasboardLayout />
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment/>,
            }

        ]

    }



])

export default router