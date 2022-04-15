
import React from 'react';

//component is parent and footer is its child
class Footer extends React.Component{
    constructor(){
        super();
        this.name = {
            rName : 'Bhojori',
            rLoc: 'Pune'
        }
    }

    render = () => {
        return(
            <div>
                <h5 style={{color: 'black', textAlign: 'center', position: 'absolute', bottom: '10px', width:'100%'}}>
                    Copyright  {new Date().getFullYear} - {this.name.rName} | {this.name.rLoc}</h5>
            </div>
        )
    }
}

export default Footer;