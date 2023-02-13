import { useState } from "react"
import Navbar from "../Components/Navbar"

import HomeSection from "../Components/HomeSection"
import TopSection from "../Components/TopSection"
import HomePageMd from "./HomePageMd.md"
import ReactMarkdown from "react-markdown"
const HomePage = () => {
    const [markdown, setMarkdown] = useState(HomePageMd)

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
            <ReactMarkdown children={markdown} /> 
         </div>
        </>
    )
} 

export default HomePage