import axios from "axios";

export const getUsers = (setUsers, setState) => {
  axios
    .get("https://randomuser.me/api/?results=20")
    .then((res) => {
      console.log(res.data.results);
      setState(res.data.results);
      setUsers(res.data.results);
    })
    .catch((error) => {
      alert("Error While getting the Users Data");
    });


};