import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "../Pages/Auth";
import Home from '../Pages/Home'
import NotFound from "../Pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/Home" element={<Home/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default AppRoutes;