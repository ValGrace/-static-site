import pwbg from "../assets/pwbg.jpg"
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
            <img src={pwbg} alt="sec-photo" />
        </div>
        
      </div>
  
      </>
    )
}

export default TopSection