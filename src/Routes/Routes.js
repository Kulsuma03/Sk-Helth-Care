import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main/Main";
import Categories from "../pages/Categories/Categories";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Service from "../pages/Service/Service";
import ServiceInfo from "../pages/ServiceInfo/ServiceInfo";
import Services from "../pages/Services/Services";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://sk-health-care-server.vercel.app/categories'),
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/categories',
                loader: () => fetch('https://sk-health-care-server.vercel.app/categories'),
                element: <Categories></Categories>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                loader: ({params}) => fetch(`https://sk-health-care-server.vercel.app/service/${params.id}`),
                element: <Service></Service>
            },
            {
                path: '/details/:id',
                loader: ({params}) => fetch(`https://sk-health-care-server-nzu80x7ly-kulsuma03.vercel.app/details/${params.id}`),
                element: <ServiceInfo></ServiceInfo>
            }

        ]
    }

])