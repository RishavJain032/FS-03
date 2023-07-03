import image1 from "../Components/Screenshot (190).png"
import image2 from "../Components/Screenshot (189).png"
const Main =()=>{
    return(
        <div style = {{borderRadius : '20px',marginTop : "40px",width : "40%",display : 'flex',justifyContent : "center",flexDirection : "column",alignItems  :'center'}}>
            <h1 style={{marginLeft : "-130px",marginTop : "30px"}}>Header <br />Footer</h1>
            <p style ={{marginLeft :"-85px",marginTop : "-20px"}}>Lorem ipsum dolor <br />sit amet consectetur<br /> adipisicing elit. <br />Esse quae quos <br />repellat id sed ipsum<br /> nesciunt odit incidunt</p>
            <img src = {image1}style = {{marginLeft : '-100px',height : "80px"}}/>
            <div style  = {{marginLeft : "400px",marginTop : "-320px",width :"60%"}}>
                <img src = {image2} width = "520px"height = "350px"/>

            </div>
        </div>
    )
}
export default Main;