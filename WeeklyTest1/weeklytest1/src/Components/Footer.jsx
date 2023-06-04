import React from "react";
import Subhead from "./Cmp/Subhead";

const Footer = () =>{
    return(
        <div className="fot">

            <div className="foooterhead">
                <Subhead text  = "About Flex Pro Bussiness"/>
                <Subhead text = "Recent Photos"/>
                <Subhead text = "Galeries"/>

            </div>
            <div className="lorem">
            <p>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit.<br /> Reprehenderit earum nesciunt <br />esse, maxime iusto laboriosam<br /> distinctio nisi quis ipsam amet,<br /> praesentium voluptatum et ex <br />cum ipsa suscipit debitis <br />exercitationem magnam!</p>
                <p>Lorem ipsum dolor, sit amet<br /> consectetur adipisicing elit.<br /><br /> Ratione tempore saepe quam corporis<br /> ex consequatur repellat provident<br /><br /> deleniti, iure voluptates expedita<br /> perferendis a, atque nemo.</p>
                <img  src = "https://images.wsj.net/im-320358/?width=860&height=573" width = "150px" height ="150px"/>
                </div>
               

        </div>
    )
}
export default Footer;