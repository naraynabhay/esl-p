import React from "react";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import './Card.css'
  
const Card =({id,img,text,name})=>{
    // console.log(props.props.data[0])
    //   console.log(props.data[0])
    // console.log(id)
    
    return(
      <div className="card">
        <div className="rv-card">

<div className="rv-card-img">
<img src={img} alt="" />
</div>

<div className="rv-card-icon">
<FaQuoteLeft/>
</div>


<div className="rv-card-text">
  <p>{text}</p>
</div>


<div className="rv-card-name">
  <p>{name}</p>
</div>
</div>
      </div>
    )
}
export default Card