import { useRef, useState} from 'react'
import { CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
const Articles = () => {
  // const md = window.markdownit()
  const input = useRef() 
  const preview = useRef()

  // useEffect(() => {
  //   input.addEventListener('input', handleInput)
  //   return () => input.removeEventListener('input', handleInput)
  // })
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
  const submitForm = () => {
    fetch("/articles/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: article

    })
}
  const handleInput = () => {
      // preview.current.innerHtml = md.render(input.current.value)
  }
    return (
        <>
          <div className="articles">
            <form className="md-editor">
              <input type="text" name='title' placeholder='title' onChange={e => setTitle(e.target.value)} id='inptitle'/>
            <div className='article-area'> 
              <div className='article-icons'>
                <button onClick={headTwoEvent}>Heading 2</button>
                <h3>Photo</h3>
                
                <button onClick={blockEvent}>Blockquote</button>
                <button onClick={italicEvent}>Italic</button>
                <button onClick={boldEvent}>Bold</button>
                {/* <FontAwesomeIcon icon="fa-regular fa-b" style={{color: "#000000"}} /> */}
                </div>  
            <textarea value={article} ref={input} onChange={editPost} id='txtarea' name='article'/>
            </div>
            </form>
            <div className="md-btns">
                <button id="md-btn" onClick={() => setEditor(false)}>Cancel</button>
                <button id="md-btn" onClick={submitForm}>Save</button>
            </div>
            <div id="preview" ref={preview}></div>
            <div>
            <CKEditor editor={ClassicEditor}
              data="<p>Edit article</p>"
              onReady={ editor => {
                console.log('Editor is ready to use', editor)
              }}
              onChange={ (event, editor) => {
                const data = editor.getData()
                setarticle(event.target.value)
                console.log( {event, editor, data})
              }} 
              onBlur={(event, editor) => {
                console.log( 'Blur.', editor)
              }}
              onFocus={( event, editor) => {
                console.log('Focus', editor)
              }}
              name="txtarea"
              />
                <h3>Read more articles</h3>
            </div>
          </div>
        </>
    )
} 

export default Articles