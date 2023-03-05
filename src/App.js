import "./App.css"
import { useState, useEffect} from "react";
import Axios from "axios";
function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0);
  const [friends, setFriends] = useState([]);

  const addFriend = () => {
    Axios.post("https://mongo-training.herokuapp.com/addfriend", {name: name, 
  age: age}).then(() => {})
  }


  const updateFriend = (_id) => {
    const newAge = prompt("Enter new age.")
    Axios.put("???", { newAge: newAge, _id: _id })
  };

  const deleteFriend = (id) => {
    Axios.delete(`https://mongo-training.herokuapp.com/delete/${id}` )
  }

 useEffect(() => {
   Axios.get("https://mongo-training.herokuapp.com/read").then((res) => {
    setFriends(res.data)
   }).catch(() =>
   console.log("There was an error."))
 }, [])
 
 


  return (
    
    <div className="App">
      
      <div className="Inputs">
        <div className="title"><h3><b>Add your friends:</b></h3></div>
        <input type="text" placeholder="friend" onChange={(event => setName(event.target.value))}></input>
       <input type="number"placeholder="age"onChange={(event => setAge(event.target.value))}></input>
       <a href="http://localhost:3000">
        <button onClick={addFriend}><b>Add Friend</b></button>
    </a>
    </div>
    <div>
      <div className="listOfFriends">
      {friends.map((val) => {
        return (<div className="friendContainer">
        <div className="friend">
          <h2>{val.name}</h2>
          <h4>Age: {val.age}</h4>
          </div>

          
          <a href="http://localhost:3000">
          <button id="delete" onClick={() => {deleteFriend(val._id)}}>Delete</button>
          </a>
        </div>
        )
          
      })}
      </div>
    </div>
    </div>
  );
}

export default App;
