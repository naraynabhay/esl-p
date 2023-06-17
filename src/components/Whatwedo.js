import React from "react";
import './Whatwedo.css'
 function Whatwedo(){
   return(
    <div className="wwd">
        <div className="wwd-one  wwd-card">
            <div className="wwd-img">
                <img src="./wwd-img1.png" alt="" />

            </div>
            <div className="wwd-head">
                Real time bus tracking
            </div>
            <div className="wwd-text">
            Our system utilizes GPS and cellular   to track buses in real time. Passengers can conveniently access accurate arrival and departure times, allowing them to plan their journeys more effectively.
            </div>
        </div>
        <div className="wwd-two  wwd-card">
            <div className="wwd-img">
                <img src="./wwd-img2.jpeg" alt="" />

            </div>
            <div className="wwd-head">
                Route Optimization
            </div>
            <div className="wwd-text">
            We go beyond tracking and offer  intelligent route optimization solutions. By analyzing traffic patterns, passenger demand, our system suggests optimal routes for buses to minimize travel time.
            </div>
        </div>
        <div className="wwd-three  wwd-card">
            <div className="wwd-img">
                <img src="./wwd-img3.jpeg" alt="" />

            </div>
            <div className="wwd-head">
               Data Analytics and Reporting
            </div>
            <div className="wwd-text">
            We provide comprehensive data analytics and reporting tools to help administrators and  do miscellineous activityes operators make informed decisions.
            </div>
        </div>
    </div>
    
   )

 }
 export default Whatwedo