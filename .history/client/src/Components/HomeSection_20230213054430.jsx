import { GrAction, GrFormView, GrFormCheckmark} from 'react-icons/gr'
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
                <GrFormCheckmark size="3.2em" color="green" />
            </div>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum explicabo</p>
        </div>
        <div className="single-value">
            <div id="icon-section">
                <GrFormView size="3.2em" color="green" />
            </div>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum explicabo</p>
        </div>
        <div className="single-value">
            <div id="icon-section">
                <GrAction size="3.2em" color="green"/>
            </div>
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum explicabo</p>
        </div>
    </div>
    </>
   )
}

export default HomeSection