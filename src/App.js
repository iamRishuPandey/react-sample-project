import React, {useState} from "react";
import AddUser from "./Components/Users/AddUsers";
import UsersList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, colleg: uCollege, id: Math.random().toString()}]
    });
  }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
