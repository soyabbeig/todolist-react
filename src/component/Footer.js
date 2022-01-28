import React from 'react';


function Footer() {
 /* let footerstyle={
    position:"relative",
    top:"10vh",
    width:"100%"
  }
  */
 let footerstyle={
   height:"7vh"
 }

  return (<div className='bg-dark text-light' style={footerstyle}>
    <p className='text-center'>
    copyright &copy; MyTodosList.com
    </p>
      
  </div>
  )
}

export default Footer;
