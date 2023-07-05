import { useEffect, useRef, useState} from 'react'
import { Axios } from "axios"
import Navbar from '../Components/Navbar'
import { account } from '../Utils/appwrite'
// import { FaBold, FaItalic, FaList} from 'react-icons/fa'
import { AiOutlineItalic, AiOutlineUnorderedList, AiOutlineBold, AiOutlineBlock, AiOutlineCamera} from "react-icons/ai"

const Articles = () => {

  const input = useRef() 
  const preview = useRef()
 
  const [userName] = useState("anonymous")
  const [headStyle, setHeadStyle] = useState("##") 
  const [imageData, setImageData] = useState("")
  // const [title, setTitle] = useState('')
  const [currentUser, setCurrentUser] = useState("")
  const articleContext = `
---
title: Modify this title 
author: ${currentUser ? currentUser : userName}
featured: paste a cover image link here
---
Write your article here
  `
  const [article, setarticle] = useState(articleContext)


  // get current user account
  const subscriber = () => {
    const unsubscribe = account.get()
    unsubscribe.then(function(promise){
       console.log(promise)
       setCurrentUser(promise.name)
    }, function(error) {
      console.log(error)
    })
    return unsubscribe
  }
  // fetch articles from api 
  async function getData() {
    const response =  await fetch('/articles/')
    const postData = await response.json()
    console.log(postData)
    
  }
  useEffect(()=> {
    subscriber() 
    getData()
  }, [])

  
  const headTwoEvent = (e) => {
    e.preventDefault()
    setHeadStyle(e.target.value)
    input.current.value += headStyle
    
  }

  const blockEvent = (e) => {
    e.preventDefault()
    input.current.value += "> "
  }

  const italicEvent = (e) => {
    e.preventDefault()
    input.current.value += "*edit this italic text*"
  }

  const boldEvent = (e) => {
    e.preventDefault()
    input.current.value += "**edit this bold text**"
  }
  const editPost = (event) => {
     setarticle(event.target.value)
  }
  const listEvent = (e) => {
      e.preventDefault()
      input.current.value += "\n- "
  }

   const [imageSelected, setImageSelected] = useState()
   const uploadImage = async() => {
    const formdData = new FormData()
    formdData.append("file", imageSelected)
    formdData.append("upload_preset", "blogsite")
    // formData.append("cloud_name", "dnjzdxki1")
    let data = ""    
    await Axios.post("https://api.cloudinary.com/v1_1/dnjzdxki1/image/upload", formdData).then((response)=>{
      console.log(response)
      data = response.data["secure_url"]
      setImageData(data)
    })
    input.current.value += `![add alt text here](${imageData})`
    return data
   } 
    return (
        <>
          <Navbar />
          <div className="articles">            
            <form className="md-editor" method='post' action='/articles/' encType='multipart/form-data'>
              
            <div className='article-area'> 
            
              <div className='article-icons'>
                <select value={headStyle} onChange={headTwoEvent}>
                  <option value="# ">Heading 1</option>
                  <option value="## ">Heading 2</option>
                  <option value="### ">Heading 3</option>
                </select>
                              <div>
                <label htmlFor='inputFile'> 
                <AiOutlineCamera size="2em"/>     
                <input type='file' onChange={(event) => setImageSelected(event.target.files[0])}/> 
                </label>               
                 <button onClick={uploadImage} className="btn-edit"> Upload Image</button>
                
                {/* <Image cloudName="" publicId="" /> */}
                </div>
                <span onClick={blockEvent}><AiOutlineBlock size="2em"/></span>
                <span onClick={italicEvent}><AiOutlineItalic size="2em"/></span>
                <span onClick={boldEvent}><AiOutlineBold size="2em"/></span>
                <span onClick={listEvent}><AiOutlineUnorderedList size="2em"/></span>
                
                </div>  
            
                <textarea value={article} ref={input} onChange={editPost} id='txtarea' name='article'/>
            </div>
            <div className="md-btns">
               
                <input type='submit' id="md-btn" value='Publish' />
            </div>
            </form>
            
            <div id="preview" ref={preview}></div>
            <div>
            
                <h3>Read more articles....</h3>
                
            </div>
          </div>
        </>
    )
} 

export default Articles













//   const submitForm = () => {
//     fetch("/articles/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: article

//     })
// }