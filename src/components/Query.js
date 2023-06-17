import React from "react";
import { useState } from "react";
import './Query.css'
 
function Query() {

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
   return  (

      <div className="q">
        <div className="q-left">
          <div className="q-left-b">
            <div className="q-left-head">
            Lets Talk
            </div>
            <div className="q-left-head-text">
            Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help
            </div>

            <div className="q-left-mail">
                Email
            </div>
            <div className="q-left-mail-wr">
                A4services@gmail.com
            </div>
            <div className="q-left-socials">
                Socials Media
            </div>
            <div className="q-left-socials-wr">
                <a href="https://www.instagram.com/"></a>
                <a href="https://www.facebook.com/login/"></a>
                <a href="https://twitter.com/i/flow/login"></a>
            </div>
            </div>
        </div>
        <div className="q-right">
        <form>
        <label htmlFor="name">Name</label>
        <br />
         <input size={30}
         type="text" id="name"
         placeholder='First Name' name='firstName'
        //  onChange={FirstNameHandler}
        onChange={ChangeHandler}
        value={formData.firstName}
         />
         

          <br />
          <br />

        
          <label htmlFor="mail"> Enter your mail</label>
          <br />
         <input size={30}
         type="email" placeholder='enter yu mail' name='mail' id="mail"   
         onChange={ChangeHandler} 
         value={formData.mail}
         />
         
         <br /><br />


         <label htmlFor="query">Enter your message</label>    <br />
         <textarea name="comments" id="query" cols="30" rows="5" placeholder='Enter your comment here'
         onChange={ChangeHandler}></textarea>
         

         <br /><br />

         <input type="checkbox"
         onChange={ChangeHandler}
         name='isVisible'
         id='isVisible'
         checked={formData.isVisible}
          />
         <label htmlFor="isVisible">Are you current user?</label>


        <br /><br />

        <input type="radio"
        onChange={ChangeHandler} 
        name='status'
        value="online-mode"
        id='status'/>
        <input type="radio"
        onChange={ChangeHandler} 
        name='status'
        value="offline-mode"
        id='status'
        />
        <label htmlFor="status">are you okay</label>

       </form> 
        </div>
      </div>
      )
}

export default Query
