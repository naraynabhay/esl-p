import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import Rectangle from "./lp-image/Rectangle 32.svg"
// import loginimg from "./lp-image/Group 196.svg"
import Process from './components/Process';
import data from  './data'
import Review from './components/Review';
import Feedback from './components/Feedback';
import Whatwedo from './components/Whatwedo';
import Query from './components/Query';
import Heading from './components/Heading';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';



const App =() => {
 
  return (
    <div className="App">


     <div className='App-lp'>

      <div className='heading'>
      <Heading  />
      </div>


     <div className='login'>
     <Login/>
     </div>


     <div>
     <Process/>
     </div>
          <div className='rev-head'>
            Review's
          </div>
     
     <div className='review'>
     <Review data={data}></Review> 
     </div>


     <div className='feedback'>
     <Feedback/>
     </div>
  <div className='rev-head' >
    What We do
  </div>

     <div className='whatwedo'>
     <Whatwedo/>
     </div>


     <div className='query'>
     <Query/>
     </div>

     <Footer/>
     
  
  
  
     </div>


    </div>
  );
}

export default App;
