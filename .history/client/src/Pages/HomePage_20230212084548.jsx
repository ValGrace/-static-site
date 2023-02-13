import { useState } from "react"
import Navbar from "../Components/Navbar"

import HomeSection from "../Components/HomeSection"
import TopSection from "../Components/TopSection"
import HomePageMd from "./HomePage.md"
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
         <div>
            <textarea value={markdown} onChange={editMdFile} />
            <ReactMarkdown source={markdown} /> 
         </div>
        </>
    )
} 

export default HomePage