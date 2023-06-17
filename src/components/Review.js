import React from "react";
import Card from "./Card";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import data from "../data";
import './Review.css'

const Review = (props)=>{
    console.log(props)
    let projectdata=props.data
    // console.log(projectdata)
  return(
<div className="rv-page">
   
    
    {projectdata.map((data)=>{
       return(
        <Card id={data.id} img = {data.Image} text={data.Text} name={data.Name}/>
       )
    })
  }
    {/* <Card props={props}> </Card> */}
</div>

  )

 }
 export default Review