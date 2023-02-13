import { useRef} from 'react'
const Articles = () => {
  const textedit = useRef() 
  const preview = useRef()
    return (
        <>
          <div className="articles">
            <div className="md-editor">
            <textarea value="##Create Your Post Here" ref={textedit}/>
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