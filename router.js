import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'; 
import AboutUs from '../components/AboutUs';
import Olx from '../components/Olx'

class AppRouter extends React.Component {
    render() 
    {
        return(
            <Router>
        
                <Route exact path='/AboutUs' component={AboutUs} />
                <Route exact path='/' component={Olx} />
            </Router>
        )
    }
}

export default AppRouter;