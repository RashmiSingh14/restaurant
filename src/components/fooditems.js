import './fooditems.css'

const Fooditems = (props) => {
    return (
        <div className="box">
            
        
            <div className="subitems">
                <div>
                    <span className="veg">{props.fType}</span>
                    <strong>{props.dName} </strong>
                </div>
                <button className="buy">{props.price}</button>
            </div>
            {/* <div className="subitems">
                <div>
                    <span className="veg">Veg</span>
                    <strong>Dal Fry</strong>
                </div>
                <button className="buy">INR 80</button>
            </div>
            <div className="subitems">
                <div>
                    <span className="nonveg">Veg</span>
                    <strong>Butter Chicken</strong>
                </div>
                <button className="buy">INR 80</button>
            </div> */}
        </div>
    );
}

export default Fooditems;