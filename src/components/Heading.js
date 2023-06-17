import React from "react";
import './Heading.css'




   function Heading () {


    return(
        <div className="lp-head">
        <div className="lp-head-left">
          <div className="lp-head-left-text">
          Streamline Your Ride Booking Experience with Our Tracking Website
         
          </div>
          <div className="lp-head-left-button">
            <button>
              Search Properties
            </button>
          </div>
        </div>
        <div className="lp-head-right">
        <img src="/headimg.svg" alt="" />
        </div>
      </div>
    )
   }
   export default Heading