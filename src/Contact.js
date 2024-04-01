import React from 'react';
import Navbar from './Navbar';
import './contact.css';
function Contact() {
  return (
    <>
      <Navbar/>
      <div style={{backgroundColor:"#333",color:"white", fontSize: "1.5rem", padding: "10px 20px",}}>Contact</div>
      <div className='main'>
      <div className='contact-content'>
       
       <div className='info'> Email: <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=dishakaurang@gmail.com">dishakaurang@gmail.com</a>
</div>
<div className='info'>
        Phone no: 9429630459
</div>
<div className='info'>
        Linked In: <a href="https://www.linkedin.com/in/disha-shah-210a06205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">My LinkedIn account</a>
</div>
<div className='info'>
        github: <a href="https://github.com/disha7555">disha7555</a>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact;
