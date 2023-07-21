import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Contents = () => {
    const [contentDoc, setContentDoc] = useState()
    let { projectID} = useParams()
    async function getData() {
        const response =  await fetch('/article/:projectID/')
        const postData = await response.json()
        setContentDoc(postData)
        console.log(postData)
        
      }
      useEffect(()=> {
        
        getData()
      }, [])
    return (
        <>
        <h2>{contentDoc.Title}</h2>
            <h5>{contentDoc.Author}</h5>
            <div id="abt-img">
               <img src={contentDoc.Featured} alt="article cover" />
            </div>
            <article>{contentDoc.Content}</article>
        </>
    )
}

export default Contents