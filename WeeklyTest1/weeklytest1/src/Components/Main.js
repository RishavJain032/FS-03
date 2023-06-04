import React from "react";
import Button from "./Cmp/Button";
import Subhead from "./Cmp/Subhead";
import Para from "./Cmp/Para";
import Para2 from "./Cmp/Para2";


const Main = () =>{
    return(
    <div>

        <div>
            {/* <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7btrGw-4AwhkV2Ej9I1_Dsgea0B_A-TEMw&usqp=CAU" width = "100%" height = "300px"/> */}
            <img src = "http://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/Business%20Fundamentals.jpg&w=1200&h=630" width = "100%px" height ="300px" style = {{borderRadius : "5px"}}/>
        
            <div className="heading">
                <h1>Your Awesome Bussiness Theme</h1>
            </div>
            <div>
                <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ad corrupti eaque suscipit iste nulla ea amet, ex <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;molestias ullam ratione consequuntur, error 
                </p>
            </div>
            <div className="button">
                <Button text  = "Read More"/>
            </div>
        </div>
        <div className="fea">
            <h1>
                Our Features
            </h1>
        </div>
        <div className="imgage">
        <img src = "https://www.pngitem.com/pimgs/m/463-4639238_blue-computer-icon-icon-hd-png-download.png" width = "50px" height ="50px" style = {{borderRadius : "50%"}}/>
            <img src = "https://e7.pngegg.com/pngimages/518/320/png-clipart-computer-icons-mobile-app-development-android-my-account-icon-blue-text.png" width = "50px" height ="50px" style = {{borderRadius : "50%"}}/>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTWlIZhzmtvn_K9CzlXx4SmAELDoK83IW6w&usqp=CAU" width = "50px" height ="50px" style = {{borderRadius : "50%"}} />
        </div>
        <div className="sub">
            <Subhead text = "Fully Responsive"/>
            <Subhead text = "Trusted Author"/>
            <Subhead text = "Reausable Elements"/>

            
        </div>
        <div className="para2">
            <Para />
            <Para />
            <Para />

            
        </div>
        <div className="but">
            <Subhead text = "Read More"/>
            <Subhead text = "Read More"/>
            <Subhead text = "Read More"/>

        </div>
        <div>
        <img src = "https://imageio.forbes.com/specials-images/imageserve/6272b2e905d3785d41a36428/Business-development-to-success-and-growing-growth-concept--Businessman-pointing/960x0.jpg?format=jpg&width=960" width = "100%" height = "250px" style = {{borderRadius : "5px"}}/>
            
        </div>
        <div className="win">
        <img src = "https://w7.pngwing.com/pngs/536/342/png-transparent-computer-icons-icon-design-trophy-trophy-blue-text-photography.png" width = "50px" height ="50px" style = {{borderRadius : "50%"}}/>

{/* <i class="bi bi-bag-check-fill"></i> */}
<img src = "https://media.istockphoto.com/id/1139702710/vector/shopping-bag-icon-on-white-background-flat-style-shopping-bag-icon-for-your-web-site-design.jpg?s=612x612&w=0&k=20&c=rWXMy9se_e8jdDc-NZ2y-ZFA0ZtVtu4JnPHClW1R-lo=" width = "50px" height ="50px" style = {{borderRadius : "50%"}}/>

{/* <i class="bi bi-truck-front"></i> */}
<img src = "https://static.vecteezy.com/system/resources/previews/010/160/327/non_2x/car-icon-sign-symbol-design-free-png.png" width = "50px" height ="50px" style = {{borderRadius : "50%"}}/>

{/* <i class="bi bi-twitter"></i> */}
{/* <i class="fa-brands fa-square-twitter"></i> */}
<img src = "https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg" width = "50px" height ="50px" style = {{borderRadius : "50%"}}/>

        </div>
        <div className="num">
            <Subhead text = "22"/>
            <Subhead text = "145"/>
            <Subhead text = "349"/>
            <Subhead text = "2425"/>


        </div>
        <div className="para3">
            <Para2 text = "Awards Winnings" />
            <Para2 text = "Fineshed Projects" />
            <Para2 text = "Project Sold" />
            <Para2 text = "Twitter Fans" />

        </div>
        
    </div>
    )
}
export default Main;