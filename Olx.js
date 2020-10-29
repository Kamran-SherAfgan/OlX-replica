import React from 'react'
import { Link } from 'react-router-dom';

class Olx extends React.Component {
    Facebook = () => {
       window.location.href="/AboutUs"
    }
    render() {
        return(
            <div>
                <h1> OlX Home Page </h1>
                <button onClick={this.Facebook}></button>
            </div>
        )
    }
}

export default Olx;