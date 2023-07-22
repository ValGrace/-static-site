import { Link } from "react-router-dom"

const SingleDoc = ({ID, Featured, Title, Author}) => {
    return (
        <>
        <div className="single-value" key={ID}>
        <div id="icon-section">
               <img src={Featured} alt="article cover" />
            </div>
            <h4>{Title}</h4>
            <h5>{Author}</h5>
            <h4><Link to={`/article/${ID}`} className="page-link">Read article</Link></h4>
            
        </div>
        </>
    )
}

export default SingleDoc