
const Navbar =() =>{
    return(
        <div style = {{width : "100%",height : "60px",backgroundColor : "#f1f1f1",borderRadius  :"20px"}}>
            <div style = {{marginLeft : "50px",width : "100px",display : "flex",flexDirection : "row",alignItems : "center",borderRadius : "20px"}}>
                <h1>Logo</h1>
                </div>

                <div style = {{fontSize : "800",fontWeight : "800",width : "400px",marginLeft :"200px" ,marginTop : "-70px",display : "flex",justifyContent : "space-around",flexDirection : "row",alignItems : "center",borderRadius : "20px"}}>
                    <p style = {{color :"blue"}}>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div style = {{width : "100px",height : "40px",marginLeft : "700px",marginTop :"-45px",display : "flex",justifyContent : "space-around",flexDirection : "row",alignItems : "center",borderRadius : "20px"}}>
                        
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>

            </div>

        </div>
    );
}
export default Navbar;