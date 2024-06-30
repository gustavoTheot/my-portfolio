import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Error } from "./components/Error";

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/err" element={<Error />} />
        </Routes>
    )
}