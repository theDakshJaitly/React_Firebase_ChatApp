import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { use } from "react";
import { useState, useRef, useEffect } from "react";

const Chat = () => {
const [open, setOpen] = useState(false);
const [text, setText] = useState("");

const endRef = useRef(null);
useEffect(() => {
  endRef.current.scrollIntoView({behavior: "smooth"});
}, [text]);

const handleEmoji = e => {
  setText(text + e.emoji);
  setOpen(false);
}

  

  return (
    
    
    <div className="chat">
      
      <div className="top">
        
        <div className="user">
          
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            
            <span>The real Daksh Jaitly</span>
            <p>Calma</p>
          
          </div>
        
        </div>
        
        <div className="icons">
          
          <img src="./phone.png" alt="phone" />
          <img src="./video.png" alt="video" />
          <img src="./info.png" alt="info" />
        
        </div>
      
      </div>
      
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            
            <p>yoo</p>
            <span>11:30 AM</span>

          </div>

        </div>

        <div className="message own">
          
          <div className="texts">
            
            <p>yoo000000</p>
            <span>11:30 AM</span>

          </div>

        </div>
        <div className="message own">
          
          <div className="texts">
            
            <p>yoo000000</p>
            <span>11:30 AM</span>

          </div>

        </div>
        <div className="message own">
          
          <div className="texts">
            
            <p>yoo000000</p>
            <span>11:30 AM</span>

          </div>

        </div>
        <div className="message own">
          
          <div className="texts">
            
            <p>yoo000000</p>
            <span>11:30 AM</span>

          </div>

        </div>
        <div className="message own">
          
          <div className="texts">
            
            <p>yoo000000</p>
            <span>11:30 AM</span>

          </div>

        </div>

        <div className="message">
          <img src="./avatar.png" alt="avatar" />
          <div className="texts">
            <img src="public\Hercules-Room-Ceiling-Painting-France.jpg" alt="avatar" />
            <p>Cool Painting eh?</p>
            <span>12:30 AM</span>

          </div>

        </div>
        <div ref={endRef}></div>
      
      </div>
      
      <div className="bottom">
        
        <div className="icons">
          
          <img src="./img.png" alt="img" />
          <img src="./camera.png" alt="img" />
          <img src="./video.png" alt="img" />
        
        </div>
        
        <input type="text" placeholder="Type a message" 
        value={text}
        onChange={(e) => setText(e.target.value)} />
          
          <div className="emoji">
           
            <img src="./emoji.png" alt="emoji" onClick={() => setOpen((prev) => !prev)}/>

            <div className="picker">

              <EmojiPicker open={open} onEmojiClick={handleEmoji}/>

            </div>
          
          </div>
          
          <button className="sendButton">Send</button>
      
      </div>
    
    </div>
  );
}

export default Chat;