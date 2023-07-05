import PageRouter from './Routing/PageRouter'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBold, FaItalic, FaList, FaH3, FaH2, FaH1 } from '@fortawesome/free-solid-svg-icons'
function App() {
 
library.add(FaBold, FaItalic, FaList, FaH3, FaH2, FaH1)
  return (
    <div className="App">
      <PageRouter />
    </div>
  )
}

export default App
