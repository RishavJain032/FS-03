function Navbar(){
    return <div style = {{width : "800px",height : "500px",marginLeft : "200px",padding: "10px"}}>
        <div style = {{width : "100%",height : "50px",backgroundColor : "black",color : "white",display : "flex",flexDirection : "row",alignItems :"center"}}>
            <h1 style = {{width : "100px",display :"flex",textAlign : "flex-start",alignItems : "center",margin : "10px",fontFamily: "Righteous"}}>LOGO</h1>
            </div>
            <div style = {{margin : "0px",padding : "0px",width : "350px",height : "50px",color : "white",display : "flex",flexDirection : "row",justifyContent : "space-between",marginTop : "-50px",alignItems :"center",marginLeft : "430px"}}>
            <button style = {{width : "60px",height : "35px",backgroundColor :"#fad1d7",borderRadius : "5px"}}>HOME</button>
            <p>ABOUT</p>
            <p>MENU</p>
            <p>ORDER</p>
            <p>CONTACT</p>

        </div>
        <div style = {{width : "100%",height : "100%"}}>
            <img src = "./Mountain.webp" width ="800px" height = "100%"/>
            <h1 style = {{display : "flex" , justifyContent : "center",alignItems : "center",marginTop : "-450px",fontFamily :"Abril Fatface"}}>Home</h1>
            <div style = {{width : "350px",display : "flex",justifyContent : "center",alignItems : "center",marginTop : "350px",marginLeft : "240px"}}>
                <p style = {{color : "white"}}>Made with <i class="bi bi-balloon-heart"></i> by</p>
                <p style = {{color : "red"}}>Rishav Jain</p>
            </div>
        </div>
    </div>
}

ReactDOM.render(<Navbar />,document.getElementById('root'))