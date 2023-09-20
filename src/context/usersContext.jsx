import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const usersContext = createContext();

function UsersContextprovider({ children }) {
  const [users, setUsers] = useState();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setisLoading(true);
      let data = await axios.get("https://panorbit.in/api/users.json");
      setUsers(data?.data?.users);
      setisLoading(false);
    }
    getData();
  }, []);

  return (
    <usersContext.Provider value={{ users, isLoading }}>
      {children}
    </usersContext.Provider>
  );
}

export default UsersContextprovider;

export const useUsers = () => useContext(usersContext);
