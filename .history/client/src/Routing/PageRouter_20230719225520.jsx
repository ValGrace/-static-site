import Dashboard from "../Pages/Dashboard";
import HomePage from "../Pages/HomePage";
import { Routes, Route} from "react-router-dom"
import AboutPage from "../Pages/aboutPage";
import Articles from "../Pages/Articles";
import Contents from "../Pages/Contents";
const PageRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <HomePage />}/>
            <Route path="/login" element={ <Dashboard />}/>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<Articles />} />
            <Route exact path="/article/:projectID" element={<Contents />} />
        </Routes>
    )
}

export default PageRouter