import { useRef, useState, useReducer} from 'react'
const Articles = () => {
  const md = window.markdownit()
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
  const handleInput = () => {
      preview.current.innerHtml = md.render(input.current.value)
  }
    return (
        <>
          <div className="articles">
            <div className="md-editor">
              <button>Editor</button>
              <button>Preview</button>
            <textarea value={article} ref={input} onChange={editPost} />
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