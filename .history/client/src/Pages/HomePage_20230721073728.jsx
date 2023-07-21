import { Link} from "react-router-dom"
import Navbar from "../Components/Navbar"
import MidSection from "../Components/MidSection"
import HomeSection from "../Components/HomeSection"
import TopSection from "../Components/TopSection"


const HomePage = () => {
   

    return (
        <>
        <div className="topsection">
            <div className="topsection-cover"></div>
                     <Navbar />
         <TopSection />
         </div>
         <MidSection />
         <HomeSection />
         <Link to="/articles/" className="page-link"><button className="btn-edit">Edit</button></Link>
         {/* {editor && 
         <form className="md-edit" method="post" action="/articles/" >
            <textarea value={markdown} onChange={editMdFile} name="md"/>
           
            <div className="md-btns">
                <button id="md-btn" onClick={() => setEditor(false)}>Cancel</button>
                <input type="submit" id="md-btn" value="save" />
            </div>
         </form> */}

        </>
    )
} 

export default HomePage