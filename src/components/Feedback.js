import React from "react";
import { useState } from "react";
import './Feedback.css'

function Feedback (){
    
  const[formData,SetFormData]=useState( {firstName:"",lastName:"" ,mail:"",comments:"", isVisible:true} );
  console.log(formData);

  function ChangeHandler(event){
    SetFormData(prevFormData =>{
      return{
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    });
  }

    return(
       <div className="fb">
        <div className="fb-img">
            <img src="./esl-img.jpg" alt="" />
        </div>
        <div className="fb-right">
            <div className="fb-right-text">
                <p>If you have any remark the share with us </p>
            </div>



            <div className="fb-right-form">
            <form>
         <input 
         type="text"
         placeholder='First Name' name='firstName' size={30}
        //  onChange={FirstNameHandler}
        onChange={ChangeHandler}
        value={formData.firstName}
         />

        
          
          <br />
          <br />

         <input 
         type="email" placeholder='enter your mail' name='mail'   
         onChange={ChangeHandler}  size={30}
         value={formData.mail}
         />

         <br /><br />

         <textarea name="comments" id="" cols="30" rows="5" placeholder='Enter your comment here'
         onChange={ChangeHandler}></textarea>
         </form>
               <div className="fb-right-btn">
                <button>Get in touch with us</button>
               </div>

            </div>
        </div>
       </div>
    )
}
export default Feedback