import { useRef, useState} from 'react'
import { Axios } from "axios"
import { Image} from "cloudinary-react"
import Navbar from '../Components/Navbar'
const Articles = () => {
  // const md = window.markdownit()
  const input = useRef() 
  const preview = useRef()

  const [article, setarticle] = useState("## Edit your article here")
  const [title, setTitle] = useState('')
  
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
//   const submitForm = () => {
//     fetch("/articles/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: article

//     })
// }
  const handleInput = () => {
      // preview.current.innerHtml = md.render(input.current.value)
  }
   const [imageSelected, setImageSelected] = useState()
   const uploadImage = () => {
    const formdData = new FormData()
    formdData.append("file", imageSelected)
    formData.append("upload_preset", "gvg")

    Axios.post("https://api.cloudinary.com/v2/grace-v/image/upload", formdData).then((response)=>{
      console.log(response)
    })
   } 
    return (
        <>
          <Navbar />
          <div className="articles">
            <form className="md-editor" method='post' action='/articles/' encType='multipart/form-data'>
              <input type="text" name='title' placeholder='title' onChange={e => setTitle(e.target.value)} id='inptitle'/>
            <div className='article-area'> 
              <div className='article-icons'>
                <button onClick={headTwoEvent}>Heading 2</button>
                <div>

                <input type='file' onChange={(event) => setImageSelected(event.target.files[0])}/> 
                <button onClick={uploadImage}> Upload Image</button>
                <h3>Photo</h3>
                <Image cloudName="" publicId="" />
                </div>
                <button onClick={blockEvent}>Blockquote</button>
                <button onClick={italicEvent}>Italic</button>
                <button onClick={boldEvent}>Bold</button>
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