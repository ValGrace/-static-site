import { useState, useEffect } from "react"
import Navbar from "../Components/Navbar"

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

    }
    return (
        <>
         <Navbar />
         <TopSection />
         <HomeSection />
         <button onClick={viewEditor}>Edit</button>
         <div className="md-edit">
            <textarea value={markdown} onChange={editMdFile} />
            {/* <ReactMarkdown>`${markdown}`</ReactMarkdown>  */}
            <div className="md-btns">
                <button id="md-btn">Cancel</button>
                <button id="md-btn">Save</button>
            </div>
         </div>
        </>
    )
} 

export default HomePage