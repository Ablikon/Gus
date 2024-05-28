import React from "react";
import './auth.css'

const Auth = () => {
    return (
    <div className='main-containerkak'>
      <div className='frame-1kik'>
        <form>
        <span className='first-namebek'>Email Adress*</span>
        <input className='rectanglebek' />
        <span className='email-addressbek'>Password*</span>
        <input className='rectangle-2bek' />
        <button className='rectangle-buttonbek'>
          <span className='send-nowbek'>Log In</span>
        </button>
        </form>
        <span className='become-partnerbekhu'>Log In</span>
        <div className='frame-5bek'>
          <div className='vectorok' />
        </div>
      </div>
      
      <div className='frame-6ok' />
    </div>
    );
};

export default Auth;