import React from "react";

import img1 from '../Component/hoot.png';

import Button from "./Button";

const Navbar = () =>{
    return(
        <div className="navcontainer">


            <div className="nav">
                <img  src={img1} alt="hoot" width = "100px" heigth ="100px"/>
                <h6>Plateform</h6>
                <h6>Plans</h6>
                <h6>Enterprises</h6>
                <h6>Resoures</h6>
                <h6>Education</h6>

            </div>
            <div className="contact">
                <h6>Contact Us</h6>
                <h6>Log In</h6>
                

            </div>
            <div className="sign">
                <Button text = "Sign Up"/>
                </div>
            
            

        </div>
    )
}
export default Navbar;