import { useState, useEffect } from "react";
import fetchApi from "./fetch/fetch";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async (url) => {
    let allUsers = await fetchApi(url);
    setUsers(allUsers.users);
  };
  useEffect(() => {
    setInterval(() => {
      getUsers("https://dummyjson.com/users");
    }, 3000);
  }, []);
  
  const list = users.map((user)=>{
    let imageBack = user.image
    let imageBg = {
      backgroundImage: `url(${imageBack})`,
      height: '300px',
      width: '500px',
      backgroundRepeat: 'no-repeat',
    }
    return(
      <li key={user.id}><div style={imageBg} className="image">
        <p className="name">{user.firstName} {user.lastName}</p></div>
      </li>
    )
  })
  return (
    <div className="App">
      <ul className="list">
        {list}
      </ul>
    </div>
  );
}

export default App;
