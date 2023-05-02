import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Blogs from "../pages/Blogs/Blogs";
import ChefsRecipes from "../pages/ChefRecipes/chefsRecipes";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/chefsRecipes/:id",
                element: <PrivateRoute>
                            <ChefsRecipes></ChefsRecipes>
                        </PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-indic-cuisine-server-acm-anik.vercel.app/chefs/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
]);

export default router;