import PageRouter from './Routing/PageRouter'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

function App() {
 
library.add(fas)
  return (
    <div className="App">
      <PageRouter />
    </div>
  )
}

export default App
