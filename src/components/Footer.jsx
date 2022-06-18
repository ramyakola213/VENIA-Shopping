import React from "react";


const Footer = ()=>{
        return (

                <footer >
                 <div className="container">
                 <div className="aem-Grid aem-Grid--12 footer-one">
                 <div className="aem-GridColumn aem-GridColumn--default--3">
                  <ul>
                        <li><h5>Account</h5></li>
                        <li> Sign In</li>
                        <li>Register</li>
                        <li>Order Status</li>
                        
                  </ul>
                 </div>
                 <div className="aem-GridColumn aem-GridColumn--default--3">
                 <ul>
                        <li><h5>About Us</h5></li>
                        <li>Our Story</li>
                        <li>Careers</li>
                        <li></li>
                  </ul>
                 </div>
                 <div className="aem-GridColumn aem-GridColumn--default--3">
                 <ul>
                        <li><h5>Help</h5></li>
                        <li>Contact Us</li>
                        <li>Order Status</li>
                        <li>Returns</li>
                  </ul>
                 </div>
                 <div className="aem-GridColumn aem-GridColumn--default--3">
                 <ul>
                        <li><h5>Follow Us!</h5></li>
                        <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p></li>
                       
                  </ul>
                </div>
                 </div>
                 </div>
                 <div className="aem-Grid aem-Grid--12 footer-two">
                 <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--4"> <h3>V E N I A </h3></div>
                 <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--4"> © Company Name Address Ave, City Name, State ZIP</div>
                 <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--4 terms-policy"> <a> Terms of Use </a><a> Privacy Policy</a></div>
                
                </div>
                

                </footer>
        );
}

export default Footer;