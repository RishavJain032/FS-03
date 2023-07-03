import image from "../Components/Screenshot (191).png"
const Footer = () =>{
    return(<div style = {{backgroundColor : "#c8f4d0",}}>
        <div style = {{width : "100%",height : "200px",backgroundColor : "black",color  :"white",marginTop :"50px"}}>
            <div style = {{marginLeft : '80px',width : "75%",display : "flex",justifyContent : 'space-between',flexDirection : "row"}}>
            <h4>Block Header</h4>
            <h4>Block Header</h4>
            <h4>Block Header</h4>
            </div>
            <div style={{display : "flex",justifyContent : 'space-evenly',flexDirection : "row"}}>
                <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.<br /> At pariatur nostrum quasi alias,<br /> eligendi eius quis quisquam nam <br />est inventore laborum ex<br /> sapiente! Doloribus ipsam.<br /></p>
                <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.<br /> At pariatur nostrum quasi alias,<br /> eligendi eius quis quisquam nam <br />est inventore laborum ex<br /> sapiente! Doloribus ipsam.<br /></p>
                <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.<br /> At pariatur nostrum quasi alias,<br /> eligendi eius quis quisquam nam <br />est inventore laborum ex<br /> sapiente! Doloribus ipsam.<br /></p>
            </div> 
            <div style={{marginLeft : "-60px",width : "1000px",height : "50px",backgroundColor : "#c8f4d0",boxShadow : '0 0 20px black'}}>
            <img src = {image}width = "1000px" style = {{display : "flex",justifyContent : "center",alignItems : "center"}}/>
            </div>
            </div>
            </div>

    );
}
export default Footer;