import "./ChatList.css";
import React from "react";
import { useState } from "react";
import AddUser from "./addUser/addUser";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return(
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="/search.png" alt="search" />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add" 
                onClick={() => setAddMode(!addMode)}
                />
            </div>
            <div className="item">
                <img src="./avatar.png" alt="avatar" />
                <div className="texts">
                    <span>The real Daksh Jaitly</span>
                    <p>LaFerrari to jamba juice</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="avatar" />
                <div className="texts">
                    <span>The better Daksh Jaitly</span>
                    <p>FINISH HIM</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="avatar" />
                <div className="texts">
                    <span>Supreme Leader Daksh</span>
                    <p>Give up</p>
                </div>
            </div>
            {addMode && <AddUser/>}
        </div>
    )
}

export default ChatList;