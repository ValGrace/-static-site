import { Link } from "react-router-dom"

const SingleDoc = ({id, Featured, Title, Author}) => {
    return (
        <>
        <div className="singleDoc" key={id}>
        <div id="abt-img">
               <img src={Featured} alt="article cover" />
            </div>
            <h2>{Title}</h2>
            <h5>{Author}</h5>
            <Link to={`/article/${id}`} className="page-link">Read article</Link>
            
        </div>
        </>
    )
}

export default SingleDoc