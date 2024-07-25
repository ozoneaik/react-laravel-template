import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import SignIn from "./views/SignIn.jsx";
import SignUp from "./views/SignUp.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Navigate to="/"/>
            },
            {
                path: "/",
                element: <Dashboard/>,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {
                path: "/login",
                element: <SignIn/>,
            },
            {
                path: "/signup",
                element: <SignUp/>,
            },
        ],
    },
]);

export default router;
