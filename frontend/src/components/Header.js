import React from "react";

function Header() {
    

    return(
        <nav className="navbar bootsnav">

            <div className="container">
                
                <div className="navbar-header">
                    
                    <a className="navbar-brand" href=""><img className="logo" src="../images/logo2.png" alt=""/></a>
                </div>
                
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav menu">
                        <li><a href="/">Home</a></li>                    
                        <li><a href="/add">Company Profile</a></li>
                        <li><a href="/Cus-Req-Form">Contract Requirements Form</a></li>
                        <li><a href="#portfolio">Admin Panel</a></li>
                        <li><a href="#contact_form">Monthly Reports</a></li>
                    </ul>
                </div>
            </div>   
        </nav>
    )
}

export default Header;

