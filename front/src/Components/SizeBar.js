import React from 'react'

function SizeBar({users}) {

    let outerBar = {
        height:"30px",
        backgroundColor: "gray",
        width: "80%"
    }

    let innerBar = {
        backgroundColor: "green",
        height: "30px",
        width: users.length*10 + "%"
    }
  return (
    <div style={outerBar}>
        <div style={innerBar}></div>
    </div>
  )
}

export default SizeBar