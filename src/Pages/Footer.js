import React from "react";
import Logo from "../styles/trip2daylogo.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      
        <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
        </div>
          <div className="col1">
            
            <p>Powered By Team Blastoise ©</p>
            <p>We are hiring! </p>
            <p>info@OraldoManagerWith$$.com</p>
          </div>
          
        </div>
     
   
  );
}
