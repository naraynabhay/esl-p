import React from "react";
import './Login.css'

 const Login = () =>{


return(
 <div>
    
    <div className="lp-login">
        <div className="lp-login-left login-card">
          <div className="lp-login-left-img  login-img">
             <img src="/loginimg.svg"/>
          </div>
          <div className="lp-login-left-heading login-head">
           <p> INSIDE PREMISES</p>
          </div>
          <div className="lp-login-left-text login-text">
          Welcome to our plant transportation service, where we offer convenient and efficient rides within our facility. Whether you need to travel between different sections of the plant, visit specific workstations, or reach important meetings on time, our dedicated transportation system is here to assist you.
          </div>
          <div className="lp-login-left-button login-btn">
            <button>
              Enter
            </button>
          </div>
        </div>  
        <div className="lp-login-right login-card">
          <div className="lp-login-right-img  login-img">
             <img src="/loginimg.svg"/>
          </div>
          <div className="lp-login-right-heading login-head">
            <p>OUTSIDE PREMISES</p>
          </div>
          <div className="lp-login-right-text login-text">
          We understand that there may be times when you need transportation services beyond the boundaries of our plant. Whether it's attending off-site meetings, running errands, or traveling to nearby locations, our reliable and convenient ride booking service is here to cater to your needs.
          </div>
          <div className="lp-login-right-button login-btn btn">
            <button>Enter</button>
          </div>
        </div>
      </div>
 </div>
)

 }
 export default Login