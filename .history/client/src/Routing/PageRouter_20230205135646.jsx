import Dashboard from "../Pages/Dashboard";
import HomePage from "../Pages/HomePage";
import { Routes, Route} from "react-router-dom"
import AboutPage from "../Pages/aboutPage";
const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

        </Routes>
    )
}

export default PageRouter