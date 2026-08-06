import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { IoArrowBack } from "react-icons/io5";

function Chatuser() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };
  const isOnline = onlineUsers.includes(selectedConversation._id);

  return (
    <div className="pl-3 md:pl-5 pt-3 md:pt-5 h-[10vh] md:h-[12vh] flex items-center space-x-3 md:space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
      <button
        className="md:hidden"
        onClick={() => setSelectedConversation(null)}
      >
        <IoArrowBack className="text-2xl" />
      </button>
      <div>
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-10 md:w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-base md:text-xl">{selectedConversation.fullname}</h1>
        <span className="text-xs md:text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;