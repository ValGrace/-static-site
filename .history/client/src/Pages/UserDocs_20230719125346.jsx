
const SingleDoc = ({id, featured, title, author, content}) => {
    return (
        <>
        <div className="singleDoc" key={id}>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <div id="abt-img">
               <img src={featured} alt="article cover" />
            </div>
            <article>{content}</article>
        </div>
        </>
    )
}

export default SingleDoc