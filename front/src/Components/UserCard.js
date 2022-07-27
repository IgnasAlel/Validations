import React from 'react'

function UserCard({user}) {

    let style = {

        height: "200px",
        width: "125px",
        backgroundColor: user.gender === "female" ? "pink" : "lightblue",
        margin: "10px"
    }
    let imgStyle = {
        borderRadius: user.gender === "female" ? "10px" : "0px",
        height: "100px",
        width: "100px"
    }

  return (
    <div style={style}>
        <div>
            <h4>{user.name}</h4>
            <img src={user.photo} style={imgStyle} />
        </div>
    </div>
  )
}

export default UserCard