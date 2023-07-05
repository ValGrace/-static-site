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
              <CKEditor editor={ClassicEditor}
              data="<p>Edit article</p>"
              onReady={ editor => {
                console.log('Editor is ready to use', editor)
              }}
              onChange={ (event, editor) => {
                const data = editor.getData()
                console.log( {event, editor, data})
              }} 
              onBlur={(event, editor) => {
                console.log( 'Blur.', editor)
              }}
              onFocus={( event, editor) => {
                console.log('Focus', editor)
              }}
              />
              <button>Editor</button>
              <button onClick={handleInput}>Preview</button>
            <textarea value={article} ref={input} onChange={editPost} />
            </form>
            <div className="md-btns">
                <button id="md-btn" onClick={() => setEditor(false)}>Cancel</button>
                <button id="md-btn" onClick={submitForm}>Save</button>
            </div>
            <div id="preview" ref={preview}></div>
            <div>
                <h3>Read more articles</h3>
            </div>
          </div>
        </>
    )
} 

export default Articles