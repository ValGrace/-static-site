// import { useState } from "react"
// import axios from "axios" 
// import ReactHtmlParser from 'react-html-parser'
const TopSection = () => {


  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get('/save')
  //     setContent(response.data)
  //   }
  //   fetchData()
  // }, [])
    return (
      <>
      
      <div className="top-text" id="top-text">
      <h2 id="htitle">Static Site Generator
          
         </h2>
      <p>Welcome to your number one solution to writing and publishing articles. We generate an optimied web page when you publsih your article and make it available to our thousands of daily readers.</p>
      </div>
      <div className="head-section">
        <div className="head-img">
            <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sec-photo" />
        </div>
        
      </div>
      <div className="site-descr">
        <h3>We Write articles about tech</h3>
        <div className="site-sep"></div>
        <p>are you a tech enthusiast with a great article idea in mind? Start writing today to share your five cents with our readers. We value your contribution and will be lucky to have you write with us</p>
      </div>

      <div className="side-section">
            <div className="side-img">
                <img src="" alt=""/>
            </div>
            <div className="side-blogs">
                <h4>Featured</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil.</p>
            </div>
        </div>
      </>
    )
}

export default TopSection