import Navbar from "../Components/Navbar"
import "../Components/InfoPage.css"
import vectorComp from "../assets/tift.jpg"
const AboutPage = () => {
   return (
    <>
    <Navbar />
    
    <div className="about-mid">
        <div className="about-info" id="abt-topsection">
        <h2 id="about-page">our background</h2>
            <div className="abt-pg">
            <h4>a little history</h4>
            <p>This app started as a personal project designed for tech enthusiants with article ideas to easily create their articles and publish in minutes time. We aimed to provide a set of tools such as a simplified user interface that would make writing easily. We encourage you to try it out. I promise it is fun.</p>
            </div>

        </div>
        <div className="abt-img" id="top-img">
            <img src="https://images.pexels.com/photos/1229845/pexels-photo-1229845.jpeg?auto=compress&cs=tinysrgb&w=600" alt="tisd" />
            </div>
        <div className="about-info" id="abt-info">
            <div className="abt-img">
                <img src={vectorComp} alt="tisd" />
                </div> 
            <div className="abt-pg">
            <h4>How we built it</h4>
            <p>This application is powered by a number of technologies making it a full stack project. The client side was built using react and vanilla css making the ui a simpe and compelling design. We used golang for the backend api and server side rendering purposes. Every article written is stored in a firestore database while users are authenticated using appwrite! The api implements CRUD operations. </p>
            </div>
        </div>
   
    </div> 
    <div className="abt-context" id="context">
        <h3>Get Started</h3>
        
            <p>Users can easily get started with a ghost account. Note that your articles will then be tagged with an anonymous writer. Use the textarea to write your content and the helper buttons on top for reference to markdown. Publish when you are finished writing. Your work will then appear in the list of articles when you refresh. </p>
            <p>When you publish an article, it is first converted to markdown saved then converted to html file. the html file is then stored the firestore database and can be retrieved when a user opens the webpage.</p>
            
        
    </div>
    </>
   )
}

export default AboutPage

