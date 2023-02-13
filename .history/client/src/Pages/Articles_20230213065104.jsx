import { useRef, useEffect} from 'react'
const Articles = () => {
  const md = window.markdownit()
  const input = useRef() 
  const preview = useRef()

  useEffect(() => {
    input.addEventListener('input', handleInput)
    return () => input.removeEventListener('input', handleInput)
  })

  const handleInput = () => {
      preview.current.innerHtml = md.render(input.current.value)
  }
    return (
        <>
          <div className="articles">
            <div className="md-editor">
            <textarea value="##Create Your Post Here" ref={input}/>
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