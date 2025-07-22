import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { useAuth } from "../../context/AuthProvider";

function Users({ user }) {
  const [allUsers, loading] = useGetAllUsers();

  const { socket, onlineUsers } = useSocketContext();
  const { authUser } = useAuth();

  const filteredUsers = allUsers.filter(
    (user) => user._id !== authUser?.user._id
  );
  console.log(allUsers);

  return (
    <div className=" flex w-full justify-center ">
      <div>
        <h1 className=" w-[80%] px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
          Messages
        </h1>
        <div
          className="py-2 flex-1 overflow-y-auto"
          style={{ maxHeight: "calc(84vh - 10vh)" }}
        >
          {allUsers.map((user, index) => (
            <User key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
