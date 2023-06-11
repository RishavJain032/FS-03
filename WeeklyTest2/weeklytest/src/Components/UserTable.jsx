import React from "react";

function UserTable({ users }) {
  return (
    <table width="100%" frame="box" rules="all" style={{boxShadow : "0 0 10px black"}} >
      <thead>
        <tr style={{backgroundColor : "black",color : "white" ,height : "30px"}}>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>GENDER</th>
        </tr>
      </thead>

      <tbody align="center">
        {users.map((ele) => {
          return (
            <tr>
              <td>
                <img src={ele.picture.medium} width="100" height={100} />
              </td>
              <td>
                {ele.name.first}
                {ele.name.last}
              </td>
              <td>{ele.email}</td>
              <td>{ele.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserTable;