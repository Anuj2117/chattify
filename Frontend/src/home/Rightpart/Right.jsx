import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";
import "../../App";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div
      className={`${
        selectedConversation ? "flex" : "hidden"
      } md:flex flex-col w-full md:flex-1 bg-slate-900 text-gray-300 h-screen md:h-auto`}
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Chatuser />
          <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>
          <Typesend />
        </>
      )}
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center px-4 text-center">
          <h1 className="text-base md:text-xl">
            Welcome{" "}
            <span className="font-semibold text-lg md:text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            Select any friend to chat
          </h1>
        </div>
      </div>
    </>
  );
};