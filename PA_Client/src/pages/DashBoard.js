import React from 'react'
import {useSelector} from 'react-redux';
function DashBoard() {
    const user = sessionStorage.getItem('username');
  return (
    <div>DashBoard: Hello {user}</div>
  )
}

export default DashBoard
