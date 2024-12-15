import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import MenuComp from "./Pages/MenuComp";
import Root from "./Pages/Root";


export default function App2() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
            ],
        },
        {
            path: "/menu/:userId",
            element: <MenuComp />
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
