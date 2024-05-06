import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
const router1 = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    }
])

export default router1