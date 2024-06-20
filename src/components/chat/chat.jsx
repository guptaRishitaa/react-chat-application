import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior : "smooth"});
  },[]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
    console.log(e);
  };

  console.log(text);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem Ipsum. seeef You</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem eos rerum recusandae, debitis hic sit reiciendis
              corrupti consequuntur dolor ab in dicta, deserunt odio maxime
              placeat quo cumque enim culpa?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem eos rerum recusandae, debitis hic sit reiciendis
              corrupti consequuntur dolor ab in dicta, deserunt odio maxime
              placeat quo cumque enim culpa?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem eos rerum recusandae, debitis hic sit reiciendis
              corrupti consequuntur dolor ab in dicta, deserunt odio maxime
              placeat quo cumque enim culpa?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img
              src="https://img.freepik.com/free-photo/woman-doing-herself-scalp-massage_23-2151453841.jpg?t=st=1718811528~exp=1718815128~hmac=1ce99407ec638513b7d2c3d1c4ec766b575d0ffb98c2b98662ef9040139effa8&w=900"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem eos rerum recusandae, debitis hic sit reiciendis
              corrupti consequuntur dolor ab in dicta, deserunt odio maxime
              placeat quo cumque enim culpa?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem eos rerum recusandae, debitis hic sit reiciendis
              corrupti consequuntur dolor ab in dicta, deserunt odio maxime
              placeat quo cumque enim culpa?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
