import { RouterProvider } from "react-router"
import { AppRouter } from "./app.router"
import './index.css';

export const TesloApp = () => {
    return (
        <RouterProvider router={AppRouter} />
    )
}

