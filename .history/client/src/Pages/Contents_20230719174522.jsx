import { useEffect, useState } from "react"
const Contents = () => {
    const [contentDoc, setContentDoc] = useState()
    async function getData() {
        const response =  await fetch('/article/:id')
        const postData = await response.json()
        setContentDoc(postData)
        console.log(postData)
        
      }
      useEffect(()=> {
        
        getData()
      }, [])
    return (
        <>
        <h2>{contentDoc.title}</h2>
            <h5>{contentDoc.author}</h5>
            <div id="abt-img">
               <img src={contentDoc.featured} alt="article cover" />
            </div>
            <article>{contentDoc.content}</article>
        </>
    )
}

export default Contents