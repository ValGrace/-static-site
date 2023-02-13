// import { GrAction, GrFormView, GrFormCheckmark} from 'react-icons/gr'
import { FaAngellist, Fa500Px, FaCheck } from 'react-icons/fa'
const HomeSection = () => {
   return (
    <>
    <div>
    <h2>Top Values For You</h2>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div className="value-section">
        <div className="single-value">
            
            <div id="icon-section">
                <FaAngellist size="4.2em" color="blue" fontWeight="200"/>
            </div>
            
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum explicabo</p>
        </div>
        <div className="single-value">
            <div id="icon-section">
                <Fa500Px size="3.2em" color="blue" />
            </div>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum explicabo</p>
        </div>
        <div className="single-value">
            <div id="icon-section">
                <FaCheck size="3.2em" color="blue"/>
            </div>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum explicabo</p>
        </div>
    </div>
    </>
   )
}

export default HomeSection