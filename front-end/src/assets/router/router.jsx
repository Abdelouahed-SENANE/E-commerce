import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Layout from "../../layouts/Layout";
import Shop from "../pages/Shop";


const router = createBrowserRouter([
    {
        element : <Layout/>,

        children : [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ]
            
    }

]);


export default router;
