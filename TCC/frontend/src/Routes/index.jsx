import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "../Pages/Auth";
import Home from '../Pages/Home'
import NotFound from "../Pages/NotFound";
import Gallery from "../Pages/Gallery"
import Config from "../Pages/Config";
import Cart from "../Pages/Cart";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/Gallery" element={<Gallery/>} />
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/Config" element={<Config/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default AppRoutes;