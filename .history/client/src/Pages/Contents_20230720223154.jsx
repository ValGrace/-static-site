import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Contents.css"
const Contents = ({}) => {
    const [contentDoc, setContentDoc] = useState({
        Title: null,
        Featured: null,
        Author: null,
        Content: null,
      })
    let { projectID} = useParams()
    async function getData() {
        const response =  await fetch(`/article/${projectID}/`)
        const postData = await response.json()
        setContentDoc(postData)
        console.log(postData)
        
      }
      useEffect(()=> {
        
        getData()
      }, [])
    return (
        <div key={projectID}>
        <h2>{contentDoc.Title}</h2>
            <h5>{contentDoc.Author}</h5>
            <div id="abt-img">
               <img src={contentDoc.Featured} alt="article cover" />
            </div>
            <article dangerouslySetInnerHTML={{__html: contentDoc.Content}} />
        </div>
    )
}

export default Contents