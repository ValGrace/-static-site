import brin from "../assets/brin.jpg"
function MidSection() {
    return (
        <>
            <div className="site-descr">
        <h3>We Write Articles About Tech</h3>
        <div className="site-sep"></div>
        <p>Are you a tech enthusiast with a great article idea in mind? Start writing today to share your five cents with our readers. We value your contribution and will be lucky to have you write with us</p>
      </div>

      <div className="side-section">
            <h2>RECENT BLOGS</h2>
            <section>
             <div className="side-img-left">   
            <div className="side-img">
                <img src={brin} alt="Image by freepik"/>
            </div>
            <div className="side-blogs">
                <h4>Featured</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil.</p>
            </div>
            </div>
            </section>
        </div>
        </>
    )
}

export default MidSection