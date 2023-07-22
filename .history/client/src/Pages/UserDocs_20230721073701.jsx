import { Link } from "react-router-dom"

const SingleDoc = ({ID, Featured, Title, Author}) => {
    return (
        <>
        <div className="singleDoc" key={ID}>
        <div id="abt-img">
               <img src={Featured} alt="article cover" />
            </div>
            <h2>{Title}</h2>
            <h5>{Author}</h5>
            <Link to={`/article/${ID}`} className="page-link">Read article</Link>
            
        </div>
        </>
    )
}

export default SingleDoc