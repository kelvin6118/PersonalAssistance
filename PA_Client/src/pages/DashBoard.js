import React from 'react'
import {useSelector} from 'react-redux';
function DashBoard() {
    const user = useSelector((state)=>state.login.username);
  return (
    <div>DashBoard: Hello {user}</div>
  )
}

export default DashBoard
