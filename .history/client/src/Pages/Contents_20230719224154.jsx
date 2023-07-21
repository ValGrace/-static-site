// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Contents = ({ title, featured, author, content}) => {
    
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
        <h2>{title}</h2>
            <h5>{featured}</h5>
            <div id="abt-img">
               <img src={author} alt="article cover" />
            </div>
            <article>{content}</article>
        </div>
    )
}

export default Contents