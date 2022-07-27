import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import {useRef, useState,useEffect} from 'react'
import UserCard from './Components/UserCard';
import SizeBar from './Components/SizeBar';

function App() {
  const photoRef = useRef()
  const nameRef = useRef()
  const genderRef = useRef()
  const [users, setUsers] = useState([])
  const [postError, setPostError] = useState("")
  const [error, setError] = useState(false)
  let data = async () => {
    await fetch("http://localhost:4001/getUsers")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setUsers(data.users)
    })
  }
 
  function sendInfo(){
    let user = {
      photo: photoRef.current.value,
      name: nameRef.current.value,
      gender: genderRef.current.value
    }
    const options = {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }
    fetch("http://localhost:4001/addUser", options)
    .then(res=>res.json())
    .then(info => {
      if (info.error)  {
        setError(true)
        setPostError(info.message)} 
      if (info.error === false) {
        setError(false)
        setPostError(info.message)
        setUsers(info.users)
      }
    })

  }


  return (

 
        <div className="App">
          <div>

          <div className='inputs'>

            <input ref={photoRef} type='text' placeholder='Photo'/>
            <input ref={nameRef} type='text' placeholder='Username'/>
            <input ref={genderRef} type='text' placeholder='Gender'/>
            <button onClick={sendInfo}>Add user</button>
          </div>
            {error && <h2>{postError}</h2>}

          </div>
          <div style={{display:"flex", justifyContent:"center"}}>

            <SizeBar users={users}/>
          </div>

          <div className='user-wrapper'>
            {users.map( (x,i) => {
              return <UserCard user={x} key={i}/>
            } )}
          </div>
          
        </div>
 
  );
}

export default App;
