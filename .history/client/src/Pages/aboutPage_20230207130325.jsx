import Navbar from "../Components/Navbar"
import "../Components/InfoPage.css"
const AboutPage = () => {
   return (
    <>
    <Navbar />
    <h2 id="about-page">about us</h2>
    <div className="about-mid">
        <div className="about-info">
        <div className="abt-img">
            <img src="" alt="tisd" />
            </div>
            <h4>the TITLE</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae vitae provident voluptate quo voluptas, veniam labore tempore, atque, culpa earum eius eum magni.</p>
            
        </div>
        <div className="about-info">
            <h4>title</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, officiis magni quisquam eum quia impedit sint odit repudiandae. Fuga repudiandae ducimus eum alias. Facere iusto incidunt ab tempora, magnam temporibus!</p>
        </div>
   
    </div> 
    <div>
        <h3>View achievements</h3>
        <div>
            <h3>Project</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic!</p>
        </div>
    </div>
    </>
   )
}

export default AboutPage

