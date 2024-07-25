import React from "react";
import '../assets/css/Homepage.css';
import pic from '../assets/pic.jpg';
import { Link } from "react-router-dom";
const Homepage = ()=>{

    return(
         <div className="Background1">
         <div className="B1">
           <Link to="/login">LOGIN</Link>
           <Link to="/Signup">REGISTER</Link>
           <Link to="/Homepage">LOGOUT</Link>
           
         </div>
         <div className="B2">
         <b>WELCOME TO CORPORATE EVENT MANAGEMENT</b>
         </div>
         <div className="B3">
           <b style={{fontSize:'30px',paddingLeft:'100px',paddingTop:'40px'}}>A Better Way To Manage Your Event 
                <br></br><br></br><span style={{color:'blue'}}>✓</span>&nbsp;&nbsp;&nbsp;Find Hostels and Veuns
                <br></br><span style={{color:'blue'}}>✓</span>&nbsp;&nbsp;&nbsp;Plan and promote your event
                <br></br><span style={{color:'blue'}}>✓</span>&nbsp;&nbsp;Engage your attendees
                <br></br><span style={{color:'blue'}}>✓</span>&nbsp;&nbsp;&nbsp;Capture leads and track ROI
                </b>
            <div className="A2"><img src={pic} alt="pic"/></div>
         </div>
         </div>
    )
}
export default Homepage;