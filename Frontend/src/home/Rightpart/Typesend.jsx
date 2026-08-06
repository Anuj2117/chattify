import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-1 h-[8vh] bg-gray-800 px-2 md:px-0">
        <div className="flex-1 md:w-[70%] mx-2 md:mx-4">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-[1px] border-gray-700 flex items-center w-full py-2 md:py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1 text-sm md:text-base"
          />
        </div>
        <button>
          <IoSend className="text-2xl md:text-3xl mr-2" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;