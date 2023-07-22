
const SingleDoc = ({id, Featured, Title, Author}) => {
    return (
        <>
        <div className="singleDoc" key={id}>
        <div id="abt-img">
               <img src={Featured} alt="article cover" />
            </div>
            <h2>{Title}</h2>
            <h5>{Author}</h5>
            
            
        </div>
        </>
    )
}

export default SingleDoc