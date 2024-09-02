// import React from "react";
// import './Footer.css';

// function Footer(){
  
//   return(
//   <>
//       <footer>
//         <div>copyrights@2024</div>
//       </footer>
    
//     </>
//   )
// }
// export default Footer;




import React from "react";

import './Footer.css'

function Footer(){

  return(
    <>
    <div className="prnt">

      <div className="logo">
        <h1>LOGO</h1>
        <h2>Flipkart Company</h2>

      </div>

      <div className="weebly">
        <h1>WEEBLY THEEM</h1>
        <h1>PRE.SALE FAQS</h1>
        <h1>SUBMIT A TICKET</h1>

      </div>

      <div className="deta">
        <div className="ser">
          <h1>SERVICE</h1>
          <h1>THEME TWEAK</h1>
        </div>
        </div>

        <div className="show">
          <h1>SHOWCASE</h1>
          <h1>WIDGETKIT</h1>
          <h1>SUPPORT</h1>

        </div>

        <div className="icon">

          <hr></hr>

          <img src="/imgr\facebook.jpeg" alt="" />

          <img src="/src/assets/twitwe.jpeg" alt="" />

          <img src="/src/assets/whatsapp.jpeg" alt="" />

        </div>

      

    </div>
    
    </>
  )
}
export default Footer;