import React, { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();


  useEffect(() =>{
    axios.get("http://localhost:5001/getUser")
    .then((users) =>{
      setUsers(users.data);
    })
    .catch((error) =>{
      console.log(error);
    })
  }, []);

  const submit = () =>{
    axios.post("http://localhost:5001/createUser", {name, age})
    .then((users) =>{
      console.log(users);
    })
    .catch((error) =>{
      console.log(error);
    })
  }


  return (
    <div style={{textAlign:'center'}}>
      <div>
        <h2>First MERN(Mongo, Express, React, Node) App</h2>
      </div>
    {users.map((user) =>{
      return<div key={user._id}>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
      </div>
    })}
    <br />
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)}/><br/>
      <input type="text" onChange={(e) => setAge(e.target.value)}/><br/>
      <button onClick={submit}>Upload</button>
    </div>
    </div>
  )
}

export default App