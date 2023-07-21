
const SingleDoc = ({id, Featured, Title, Author, content}) => {
    return (
        <>
        <div className="singleDoc" key={id}>
            <h2>{Title}</h2>
            <h5>{Author}</h5>
            <div id="abt-img">
               <img src={Featured} alt="article cover" />
            </div>
            
        </div>
        </>
    )
}

export default SingleDoc