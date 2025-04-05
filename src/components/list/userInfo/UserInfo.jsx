import React from 'react'
import "./userInfo.css"
import { useUserStore } from '../../../lib/userStore';

import { useChatStore } from '../../../lib/chatStore';
import { auth } from '../../../lib/firebase';

const UserInfo = () => {

  const {currentUser} = useUserStore();
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock, resetChat } =
      useChatStore();
   const handleLogout = () => {
      auth.signOut();
      resetChat()
    };

  return (
    <div className='userInfo'>
        <div className='user'>
        <img src={currentUser.avatar || './avatar.png'} alt=''/>
        <h2>{currentUser.username}</h2>
        </div>
        <div className='icons'>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
            <img src='./video.png' alt=''/>
            <img src='./edit.png' alt=''/>
        </div>
    </div>
  )
}

export default UserInfo