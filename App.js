import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import AppRouter from '../src/container/router'

import firebase from './container/firebase.js'

import Honda70 from './images/Honda_CD_70_2019.jpg'
import Honda125 from './images/honda 125.jpg'
import Unique70 from './images/unique 70.jpg'
import Sp70 from './images/Super Power 70.jpg'
import Facebook from './images/fb.png'
import Car1 from './images/car.jpg'
import Furniture1 from './images/furniture.jpg'
import House1 from './images/houae2.jpg'
import House2 from './images/house.jpg'
import Mobile from './images/mob.jpg'
import Mobile1 from './images/mobile1.jpg'
import Mobile2 from './images/mobile2.jpg'
import Plot from './images/plot.jpg'
import Twitter from './images/twitter.png'
import Youtube from './images/youtube.png'
import Insta from './images/insta.png'
import App_Store from './images/app store.png'
import Google_Play from './images/google play.png'
import Search_icon from './images/search icon.png'


import fontawesome from '@fortawesome/fontawesome-svg-core';
import AboutUs from './components/AboutUs';




class Header extends Component{
  render(){
      return(
          <div className="header">
              <h4 id="inline" >O<span className="capital">l</span>X</h4> 
              <input placeholder="Pakistan" className="height1-input width-pak"  ></input> 
              <input type="search" placeholder="Find Cars , Mobile Phones and more..." className="height1-input width-cars height2"></input> <img src={Search_icon} id="search_icon" /> 
              <a className="height1-input login-style" > Login </a> <button className="height1-input sell-style"> <span className="plus">+</span> SELL</button> 
          </div>
      )
  }
}

class SubHeader extends Component{
    render(){
        return(
            <div className="subheader">
                
                <select name="categories" className="select">
                    <option>ALL CATEGORIES</option>
                    <option>Books</option>
                    <option>Cars</option>
                    <option>Furniture</option>
                    <option>Home Appliances</option>
                    <option>Houses</option>
                    <option>Land and Plots</option>
                    <option>Mobiles</option>
                    <option>Motor Cycles</option>
                    <option>Property</option>
                    <option>TV</option>
                    <option>Watches</option>
                    </select>
                   
                
                    <p className="inline-cat">Mobile Phones</p>
                    <p className="inline-cat">Cars</p>
                    <p className="inline-cat">Motorcycles</p>
                    <p className="inline-cat">Houses</p>
                    <p className="inline-cat">TV</p>
                    <p className="inline-cat">Tablets</p>
                    <p className="inline-cat">Land & Plots</p>
                    
            </div>
        )
    }
}


// class PopularSearch extends Component{
//     render(){
//         return(
//             <div>
//             <div className="popular-search">
//                 <h5 className="popular-heading">Pupular Searches:</h5>
//             </div>
//             <div className="filters">
//                 <h3 className="addvertisment"> Addvertisment</h3>
//                 <h5 className="filterHeading">Filters</h5>

//             </div>
//             <div className="sort">
//                 <h1> Addvertisment </h1>
//                 </div>
            
//             </div>
//         )
//     } 
// }


class Motorcycles extends Component{
    render(){
        return(
            <div className="motorcycles">
                <p > More on Motorcycles</p>
               
                <div className="bike1">
                   <img id="img_bike1" src={Honda70} alt="image" width="180px" height="100px" />
                   <h5>Rs 68,000</h5>
                   <p>Honda 70cc</p>
                </div>

                <div className="bike2">
                   <img id="img_bike2" src={Honda125} width="200"></img>
                   <h5>Rs 120,000</h5>
                   <p>Honda 125cc</p>
                </div>

                <div className="bike3">
                   <img id="img_bike3" src={Unique70} width="150" />
                   <h5>Rs 56,000</h5>
                   <p>Unique 70cc</p>
                </div>

                <div className="bike4">
                   <img id="img_bike4" src={Sp70} width="130x" />
                   <h5>Rs 58,000</h5>
                   <p>Super Power 70cc</p>
                </div>
            </div>
        )
    }
}

class Recommendations1 extends Component{
    render(){
        return(
            <div className="recommendation">
                <p> Fresh recommendations</p>
               
                <div className="recommend1">
                   <img src={Car1} width="150" height="100" id='recom_img'></img>
                   <h5>Rs 630,000</h5>
                   <p>Toyota saloon</p>
                </div>

                <div className="recommend2">
                   <img src={Furniture1} width="150" height="100" id='recom_img'></img>
                   <h5>Rs 120,000</h5>
                   <p>Used Furniture1</p>
                </div>

                <div className="recommend3">
                   <img src={House1} width="150" height="100" id='recom_img'></img>
                   <h5>Rs 900,000</h5>
                   <p>House in DHA</p>
                </div>

                <div className="recommend4">
                   <img src={House2} width="150" height="100" id='recom_img'></img>
                   <h5>Rs 800,000</h5>
                   <p>Luxury House</p>
                </div>
            </div>
        )
    }
}



class Recommendations2 extends Component{
    render(){
        return(
            <div className="recommendation2">
               
                <div className="recommend2-1">
                   <img src={Mobile} width="150" height="100" id='recom_img'></img>
                   <h5>Rs 68,000</h5>
                   <p>IPhone</p>
                </div>

                <div className="recommend2-2">
                   <img src={Mobile1} width="150" height="100" id='recom_img'></img>
                   <h5>Rs 53,000</h5>
                   <p>Vivo</p>
                </div>

                <div className="recommend2-3">
                   <img src={Mobile2} width="150" height="100" id='recom_img'></img>
                   <h5>Rs 56,000</h5>
                   <p>Revo</p>
                </div>

                <div className="recommend2-4">
                   <img src={Plot} width="150" height="100" id='recom_img'></img>
                   <h5>Rs 300,000</h5>
                   <p>Plot</p>
                </div>
            </div>
        )
    }
}



class Recommendations3 extends Component{
    render(){
        return(
            <div className="recommendation2">
               
                <div className="recommend3-1">
                   <img src={Furniture1} width="150" height="100" id='recom_img'></img>
                   
                   <h5>Rs 68,000</h5>
                   <p>Honda 70cc</p>
                </div>

                <div className="recommend3-2">
                   <img id="img_bike3" src={Unique70} width="150" height="100" id='recom_img' />
                    
                   <h5>Rs 120,000</h5>
                   <p>Honda 125cc</p>
                </div>

                <div className="recommend3-3">
                  <img src={House2} width="150" height="100" id='recom_img'></img>
                   
                   <h5>Rs 56,000</h5>
                   <p>Unique 70cc</p>
                </div>

                <div className="recommend3-4">
                   <img src={Car1} width="150" height="100" id='recom_img'></img>
                   
                   <h5>Rs 58,000</h5>
                   <p>Super Power 70cc</p>
                </div>
            </div>
        )
    }
}


class Addvertisment extends Component{
    constructor(){
        super()
        this.state = { 
         sample() {
              console.log('chal raha hai')
          }
        }
    }

    render(){
        return(
            <div className="add-footer">
                <h3>
                    Addvertisment
                </h3>

                {/* <button onClick={this.state.sample}>Check Sample</button> */}
            </div>
        )
    }
}


class Footer_list extends Component{
    constructor(){
        super()
        this.state = { 
            Name: 'Kamran',
            email: 'kami.sher.ks@gmail.com',
            Phone: '03413537480'
        }
    }
     
    render(){
   
        return(
            <div className="main-footer-list">
                <div className="footer-popular">
                    <h5 className="popular-h5">POPULAR CATEGORIES</h5>
                    <ul>
                        <li className="popular-li">
                            Cars <br/>
                            Flats for rent <br/>
                            Jobs <br/>
                            Mobile Phones

                        </li>
                    </ul>
                        
                    </div>
{/* //////////////////////////////////////////////////////////// */}
                    <div className="footer-trending">
                      <h5 className="trending-h5">TRENDING SEARCHES</h5>
                        <ul>
                         <li className="trending-li">
                            Bikes <br/>
                            Watches <br/>
                            Books <br/>
                            Dogs

                         </li>
                        </ul>   
                      </div>
{/* //////////////////////////////////////////////////////////////// */}
                    <div className="footer-about">
                      <h5 className="about-h5">ABOUT US</h5>
                        <ul>
                         <li className="about-li">
                            About OLX Group <br/>
                            OLX Blog <br/>
                            Contact Us <br/>
                            OLX For Businesses

                         </li>
                        </ul>   
                    </div>
 {/* //////////////////////////////////////////////////////////////////*/}
                    <div className="footer-olx">
                      <h5 className="olx-h5">OLX</h5>
                        <ul>
                         <li className="olx-li">
                            Help <br/>
                            Sitemap <br/>
                            Legal & Privacy information 

                         </li>
                        </ul>   
                        
                      </div>
{/* ///////////////////////////////////////////////////////////// */}
                    <div className="footer-followus">
                      <h5 className="follow_icon"> Follow Us </h5>
                      <img src={Facebook} width="18" height='18' className='social-icon'></img>
                      <img src={Twitter} width="18" height='18' className='social-icon'></img>
                      <img src={Youtube} width="18" height='18' className='social-icon'></img>
                      <img src={Insta} width="18" height='18' className='social-icon'></img>

                    </div>

                    <div>
                        
                      <img src={App_Store} width="88" height='28' className='social_store'></img>
                      <img src={Google_Play} width="88" height='28' className='social_store'></img>
                    </div>
          </div>
        )
    }
}



class Last_footer extends Component{
    render(){
        return(
            <div className="last-footer">
               <p className="color"> Other Countries <span className="color countries"> India - South Africa - Indonesia</span>   
                <span className="color classified"> Free Classifieds in Pakistan .&copy; 2006-2020 OLX</span></p>

            </div>
        )
    }
}









export {
     Header,
     SubHeader,
    //  PopularSearch
    Motorcycles,
    Recommendations1,
    Recommendations2,
    Recommendations3,
    Addvertisment,
    Footer_list,
    Last_footer
} 