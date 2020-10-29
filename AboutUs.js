import React from 'react'
import { Link } from 'react-router-dom';
// import { Router } from 'react-router-dom/cjs/react-router-dom.min';

class AboutUs extends React.Component {
    constructor(){
        super()
        this.state = { 
            Name: 'Kamran',
            email: 'kami.sher.ks@gmail.com',
            Phone: '03413537480'
        }
    }
    render() {
        return(
            <div>
                <h1> About Us  </h1>
            
            </div>    
        )   
    }
}

export default AboutUs;