import { useEffect, useRef, useState} from 'react'
import { Axios } from "axios"
// import { Image} from "cloudinary-react"
import Navbar from '../Components/Navbar'
import { account } from '../Utils/appwrite'

const Articles = () => {

  const input = useRef() 
  const preview = useRef()
  // const { currentUser} = useAuth()

  const [userName] = useState("anonymous")
  
  const [title, setTitle] = useState('')
  const [currentUser, setCurrentUser] = useState("")
  const articleContext = `
     ---
     title: Modify this title 
     author: ${currentUser ? currentUser : userName}
     ---
     Write your article here
  `
  const [article, setarticle] = useState(articleContext)
  useEffect(()=> {
    const unsubscribe = account.get()
    unsubscribe.then(function(promise){
       console.log(promise)
       setCurrentUser(promise.name)
    }, function(error) {
      console.log(error)
    })
    return unsubscribe
  }, [])
  
  const headTwoEvent = (e) => {
    e.preventDefault()
    input.current.value += "## "
    console.log(input.current)
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
      input.current.value += "\n-"
  }


   const [imageSelected, setImageSelected] = useState()
   const uploadImage = () => {
    const formdData = new FormData()
    formdData.append("file", imageSelected)
    formdData.append("upload_preset", "gvg")
    let data = ""    
    Axios.post("https://api.cloudinary.com/v2/grace-v/image/upload", formdData).then((response)=>{
      console.log(response)
      data = response.data["secure_url"]
    })
    return data
   } 
    return (
        <>
          <Navbar />
          <div className="articles">
            
            <form className="md-editor" method='post' action='/articles/' encType='multipart/form-data'>
              <input type="text" name='title' value={title} placeholder='title' onChange={e => setTitle(e.target.value)} id='inptitle'/>
            <div className='article-area'> 
              <div className='article-icons'>
                <button><FontAwesomeIcon icon="fa-regular fa-h1" style={{color: "#3c3c3c",}} /></button> 
                <button onClick={headTwoEvent}><FontAwesomeIcon icon="fa-regular fa-h2" style={{color: "#3c3c3c",}} /></button>
                <button><FontAwesomeIcon icon="fa-regular fa-h3" style={{color: "#3c3c3c",}} /></button>
                <div>

                <input type='file' onChange={(event) => setImageSelected(event.target.files[0])}/> 
                <button onClick={uploadImage}> Upload Image</button>
                <h3>Photo</h3>
                {/* <Image cloudName="" publicId="" /> */}
                </div>
                <button onClick={blockEvent}><FontAwesomeIcon icon="fa-regular fa-block-quote" style={{color: "#555555",}} /></button>
                <button onClick={italicEvent}><FontAwesomeIcon icon="fa-regular fa-italic" style={{color: "#555555",}} /></button>
                <button onClick={boldEvent}><FontAwesomeIcon icon="fa-regular fa-bold" style={{color: "#000000",}} /></button>
                <button onClick={listEvent}><FontAwesomeIcon icon="fa-regular fa-list" style={{color: "#555555",}} /></button>
                {/* <FontAwesomeIcon icon="fa-regular fa-b" style={{color: "#000000"}} /> */}
                </div>  
            <textarea value={article} ref={input} onChange={editPost} id='txtarea' name='article'/>
            </div>
            <div className="md-btns">
                <input type='button' id="md-btn" onClick={() => setEditor(false)} value='Cancel' />
                <input type='submit' id="md-btn" value='Save' />
            </div>
            </form>
            
            <div id="preview" ref={preview}></div>
            <div>
            
                <h3>Read more articles</h3>
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