import { useState, useEffect } from "react"
import Navbar from "../Components/Navbar"

import HomeSection from "../Components/HomeSection"
import TopSection from "../Components/TopSection"
import { HomeContext } from "../MdFiles/MdFileContext"
import ReactMarkdown from "react-markdown"
const HomePage = () => {
    const [markdown, setMarkdown] = useState(HomeContext)
    // useEffect(() => {
    //     fetch(HomeContext)
    //        .then((res) => res.text())
    //        .then((text) => setMarkdown(text))
    // })
    const editMdFile =(event) => {
        setMarkdown(event.target.value)
    }
    return (
        <>
         <Navbar />
         <TopSection />
         <HomeSection />
         <div className="md-edit">
            <textarea value={markdown} onChange={editMdFile} />
            {/* <ReactMarkdown>`${markdown}`</ReactMarkdown>  */}
         </div>
        </>
    )
} 

export default HomePage