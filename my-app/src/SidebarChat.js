import './SidebarChat.css'
import { Avatar } from '@mui/material'
import { useState, useEffect } from 'react';

function SidebarChat({ id, name, addNewChat }) {
const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))

  }, [])

  const createChat = () => {
    const roomName = prompt("Please enter name for chat")
    if (roomName) {
      // do some clever database stuff (will comeback to this later! )
    }
};
  
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
      <div onClick={createChat} className="sidebarChat">
        <h2>Add new chat</h2>
      </div>
    )
}

export default SidebarChat
