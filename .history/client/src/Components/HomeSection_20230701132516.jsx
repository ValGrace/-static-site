// import { GrAction, GrFormView, GrFormCheckmark} from 'react-icons/gr'
import { FaAngellist, Fa500Px, FaCheck } from 'react-icons/fa'
const HomeSection = () => {
   return (
    <>
    <div className='footer'>
    <h2>Top Values For You</h2>
    <p>The advantage we offer our authors.</p>
    </div>
    <div className="value-section">
        <div className="single-value">
            
            <div id="icon-section">
                <FaAngellist size="4.2em" color="blue" fontWeight="200"/>
            </div>
            
            <h4>Real Time Updates</h4>
            <p>your published articles appear on the homepage almost immediately.</p>
        </div>
        <div className="single-value">
            <div id="icon-section">
                <Fa500Px size="3.2em" color="blue" />
            </div>
            <h4>Credits</h4>
            <p>Every article published will be credited to the respective author.</p>
        </div>
        <div className="single-value">
            <div id="icon-section">
                <FaCheck size="3.2em" color="blue"/>
            </div>
            <h4>Internal Tools</h4>
            <p>We provide tools to make writing easy for you.</p>
        </div>
    </div>
    </>
   )
}

export default HomeSection