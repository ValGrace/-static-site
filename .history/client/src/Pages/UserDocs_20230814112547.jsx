import { Link } from "react-router-dom"

const SingleDoc = ({ID, Featured, Title, Author}) => {
    return (
        <>
        <div className="single-value" key={ID}>
        <div id="icon-section">
               <img src={Featured} alt="article cover" />
            </div>
            <h5>{Title}</h5>
            <h5>{Author}</h5>
            <h6><Link to={`/article/${ID}`} className="page-link">Read article</Link></h6>
            
        </div>
        </>
    )
}

export default SingleDoc