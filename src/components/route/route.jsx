import { createBrowserRouter } from "react-router-dom";
import Home from "./home";

import Botcard from "../Botcard";
import Botdetails from "./Botdetails";
const router1 = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'robot/:id',
        element: <Botdetails />
    }
])

export default router1