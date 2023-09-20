import React from "react";
import Styles from "./LandingPage.module.css";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import { useUsers } from "../../context/usersContext";

function LandingPage() {
  const { users, isLoading } = useUsers();
  console.log("users", users);

  return (
    <div className={Styles.LandingWrapper}>
      <div
        className="border-2 w-[38%] m-auto  rounded-[3rem] "
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
      >
        <div className=" bg-gray-100 rounded-t-[2.8rem]">
          <h1 className="text-xl text-zinc-600 font-semibold p-6 text-center">
            Select an Account
          </h1>
        </div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="bg-white rounded-b-[2.8rem]">
            <div className="p-8 overflow-y-auto h-[28rem] scrollbar-thin">
              {users?.length > 0 &&
                users.map((user) => (
                  <li key={user.id} className="mb-4 list-none ">
                    <Link
                      to={`/profile/${user.id}`}
                      className="block  rounded hover:bg-gray-100 "
                    >
                      <div className="flex items-center pb-4 bg-white">
                        <img
                          src={user.profilepicture}
                          alt={user.username}
                          className="w-11 h-11 rounded-full mr-2"
                        />
                        <div className="font-medium">{user.name}</div>
                      </div>
                      <hr />
                    </Link>
                  </li>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
