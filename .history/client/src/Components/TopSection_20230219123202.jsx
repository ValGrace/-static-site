const TopSection = () => {
    return (
      <>
      <div className="top-text" id="top-text">
      <h2 id="htitle">Modify this blog title
          {/* NEW TITLE */}
         </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit illo aspernatur dicta qui, repellat, placeat non consectetur pariatur repellendus reprehenderit voluptatum, molestias cumque facere quisquam.</p>
      </div>
      <div className="head-section">
        <div className="head-img">
            <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sec-photo" />
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
      </div>
      <div className="site-descr">
        <h3>We Write articles about tech</h3>
        <div className="site-sep"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae, nam laboriosam voluptatum perspiciatis impedit esse quas molestiae cupiditate voluptatem iste quasi dolor.</p>
      </div>
      </>
    )
}

export default TopSection