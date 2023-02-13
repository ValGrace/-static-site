import Dashboard from "../Pages/Dashboard";
import HomePage from "../Pages/HomePage";
import { Routes, Route} from "react-router-dom"

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    )
}

export default PageRouter