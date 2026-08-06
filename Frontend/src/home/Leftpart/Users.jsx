import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { useAuth } from "../../context/AuthProvider";

function Users({ user }) {
  const [allUsers, loading] = useGetAllUsers();
  const { socket, onlineUsers } = useSocketContext();
  const { authUser } = useAuth();

  return (
    <div className="flex w-full justify-center">
      <div className="w-full px-2 md:px-0">
        <h1 className="w-full md:w-[80%] mx-auto px-4 md:px-8 py-2 text-white text-sm md:text-base font-semibold bg-slate-800 rounded-md">
          Messages
        </h1>
        <div className="py-2 flex-1 overflow-y-auto min-h-[25vh] md:min-h-[calc(84vh-10vh)]">
          {allUsers.map((user, index) => (
            <User key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;