import React from "react";
import Search from "./Search";
import Users from "./Users";
import useConversation from "../../statemanage/useConversation";
import Logout from "../left1/Logout";

function Left() {
  const { selectedConversation } = useConversation();

  return (
    <div
      className={`${
        selectedConversation ? "hidden" : "flex"
      } md:flex flex-col w-full md:w-[35%] bg-black text-gray-300 h-screen md:h-auto overflow-y-auto`}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl md:text-3xl p-2 px-4 md:px-11">
          Chats
        </h1>
        <Logout />
      </div>
      <Search />
      <div className="flex-1 overflow-y-auto min-h-[30vh] md:min-h-[calc(84vh-10vh)]">
        <Users />
      </div>
    </div>
  );
}

export default Left;
