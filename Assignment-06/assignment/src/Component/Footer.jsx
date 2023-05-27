import React from "react";

import image1 from '../Component/image1.png'
import image2 from '../Component/image2.png'
import image3 from '../Component/image3.png'
import Para from "./Para";



const Footer =() => {
    return(
        <div className="footer">

            <div className="ima">

            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>


            </div>
            <div className="point">
                <Para text = "2,500" />
                <Para text = "45,000" />
                <Para  text = "200,000 +"/>

            </div>
            <div className="ent">
                <Para text = "enterpries organization successfully launched" />
                <Para text = "enterpries user onboarded seamlessly" />
                <Para  text = "proffesonal trained on product and strategy"/>

            </div>



        </div>
    )

}
export default Footer;
