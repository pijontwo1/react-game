import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button"
import axios from "axios";
import $ from "jquery";

// function getUser(){
//   const [user,setUser] = React.useState([]);
//   fetch("https://localhost:8000/start",{
//     method:"post",
//     headers:{
//       "content-type":"aplication/json",
//     },
//     body:JSON.stringify()
//   })
// }

function start() {
  const [user, setUser] = React.useState([]);
  const [mbg, setMbg] = React.useState(Object);

// function find_item() {
//   setMbg(".mbg")

//   mbg.animate({
//     top : "30px",
//     height : "60%",
//     width : "60%",
//     left : "-50px",
//     opacity : "0.8"
//   }, 550).animate({
//     top : "10px",
//     height : "70%",
//     width : "70%",
//     left : "-100px",
//     opacity : "0.6"
//   }, 300).animate({
//     top : "30px",
//     height : "80%",
//     width : "80%",
//     left : "-150px",
//     opacity : "0.1"
//   }, 550).animate({
//     top : "10px",
//     height : "50%",
//     width : "50%",
//     left : "10px"
//   }, 0);

// }

  

  React.useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get("http://localhost:8000/start");
  //     // console.log(res);
  //     setUser(res.data);
  //     // console.log(res.data);
  //   };
  //   fetchUser();


  $(".btn1").click((e)=>{
    // alert("되냐")
    $(".mbg").animate({
      top : "30px",
      // height : "60%",
      width : "60%",
      left : "-50px",
      opacity : "0.8"
    }, 600).animate({
      top : "10px",
      // height : "110%",
      width : "70%",
      left : "-100px",
      opacity : "0.6"
    }, 500).animate({
      top : "30px",
      // height : "115%",
      width : "80%",
      left : "-150px",
      opacity : "0.1"
    }, 600).animate({
      top : "10px",
      // height : "100%",
      width : "50%",
      left : "10px"
    }, 0);
  })



  }, []);

  // const userInfo = user.map((user) => user);

  const inStyle = {
    color: "white",
  };

  return (
    <>
      <div style={inStyle}>
        {/* {console.log(userInfo[0])} */}
        {/* <div>{userInfo[0]}</div> */}
        <img
          className="mbg"
          style={{ width: "50%", margin: "20px auto" }}
          src="img/start.png"
          alt="start"
        />
        <TableContainer
          component={Paper}
          style={{
            width: "50%",
            margin: "0 auto",
            border: "1px solid white",
          }}
        >
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: "black", color: "white" }}>
                  <h3
                  className="wer"
                    style={{
                      fontSize: "20px",
                      // whiteSpace:"nowrap",
                      // margin:0,
                      // position:"fixed",
                      // transform:"translate(-50%,-50%)"
                    }}
                  >
                    Starting Position
                  </h3>
                  <p>　</p>
                  <Button
                  className="btn1"
                  variant="contained"
                  // onClick={()=> find_item()}
                  >asdf</Button>
                  <p>　</p>
                  <p>　</p>
                  <p>　</p>
                  Selectable icons
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default start;
