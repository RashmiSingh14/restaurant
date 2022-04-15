
import './fooditems.css'

const Drinks = (props) => {
    return(
        <div className="box">
            <div className="subitems">
                <div className="item">
                    <span className="cock">{props.fType}</span>
                    <strong>{props.dName} </strong>
                </div>
                <button className="buy">{props.price}</button>
            </div>
            {/* <div className="subitems">
                <div className="item">
                    <span className="cock">Cocktail</span>
                    <strong>Bellini </strong>
                </div>
                <button className="buy">INR 600</button>
            </div>
            <div className="subitems">
                <div className="item">
                    <span className="mock">Mocktail</span>
                    <strong>Orange Punch </strong>
                </div>
                <button className="buy">INR 300</button>
            </div> */}
            
        </div>
    );
}

export default Drinks;