import "./Chat.css"
import { Avatar, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from "react";
function Chat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))

    }, [])


    return ( 
        <div className="chat">
            <h1>This is the chat page</h1>

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">

                    <IconButton><SearchIcon /></IconButton>
                    <IconButton><AttachFileIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>

                </div>
            </div>

            <div className="chat__body">
            <p className="chat__message chat__reciever">
            <span className="chat__name">Saeed Ash</span>
                Hey Guys!
            <span className="chat__timestamp">
                3:30pm
            </span>
            </p>
            
            </div>

            <div className="chat__footer">

            </div>

        </div>
    )
}

export default Chat
