import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Contents = ({}) => {
    const [contentDoc, setContentDoc] = useState([])
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
        <div key={projectID}>
        <h2>{contentDoc.title}</h2>
            <h5>{contentDoc.featured}</h5>
            <div id="abt-img">
               <img src={contentDoc.author} alt="article cover" />
            </div>
            <article>{contentDoc.Content}</article>
        </div>
    )
}

export default Contents