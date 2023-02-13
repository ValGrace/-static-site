import Navbar from "../Components/Navbar"
import "../Components/InfoPage.css"
const AboutPage = () => {
   return (
    <>
    <Navbar />
    <h2 id="about-page">about (add title)</h2>
    <div className="about-mid">
        <div className="about-info">
            <h4>the TITLE</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae vitae provident voluptate quo voluptas, veniam labore tempore, atque, culpa earum eius eum magni.</p>
            <div className="abt-img">
                <img src="" alt="tisd" />
            </div>
        </div>
        <div>
            <h4>title</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, officiis magni quisquam eum quia impedit sint odit repudiandae. Fuga repudiandae ducimus eum alias. Facere iusto incidunt ab tempora, magnam temporibus!</p>
        </div>
   
    </div> 
    </>
   )
}

export default AboutPage

