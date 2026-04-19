
import React from "react";
import Logo from "../../assets/kwikTradeLogo.png";
import "./header.css"
function Header() {
  return (
    <div className="bg-black w-full h-14 sm:h-16 md:h-20 not-last:">
      
      <div className="max-w-7xl mx-auto flex items-center h-full px-4 sm:px-6 md:px-10 img-container">
        
        {/* Logo */}
        <img
          src={Logo}
          alt="logo"
          className="h-8
          max-h-10
          mx-50
          logo-img
          sm:max-h-12 md:max-h-14 w-auto object-contain"
        />

      </div>
      
    </div>
  );
}

export default Header;





