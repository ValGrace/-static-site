import { useState, useEffect } from "react"
import Navbar from "../Components/Navbar"
import MidSection from "../Components/MidSection"
import HomeSection from "../Components/HomeSection"
import TopSection from "../Components/TopSection"
import { HomeContext } from "../MdFiles/MdFileContext"

const HomePage = () => {
    const [markdown, setMarkdown] = useState(HomeContext)
    // useEffect(() => {
    //     fetch(HomeContext)
    //        .then((res) => res.text())
    //        .then((text) => setMarkdown(text))
    // })
    const [editor, setEditor] = useState(false)
    const editMdFile =(event) => {
        setMarkdown(event.target.value)
       
    }

    const viewEditor = () => {
       setEditor(true)
    }

    // const submitForm = () => {
    //     fetch("http://localhost:8080/save", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: markdown
    //     })
    // }
    return (
        <>
        <div className="topsection">
            <div className="topsection-cover"></div>
                     <Navbar />
         <TopSection />
         </div>
         <MidSection />
         <HomeSection />
         <button onClick={viewEditor} className="btn-edit">Edit</button>
         {editor && 
         <form className="md-edit" method="post" action="/articles/" >
            <textarea value={markdown} onChange={editMdFile} name="md"/>
            {/* <ReactMarkdown>`${markdown}`</ReactMarkdown>  */}
            <div className="md-btns">
                <button id="md-btn" onClick={() => setEditor(false)}>Cancel</button>
                <input type="submit" id="md-btn" value="save" />
            </div>
         </form>
}
        </>
    )
} 

export default HomePage