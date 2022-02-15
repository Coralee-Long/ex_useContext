import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiController = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
    setLoading(false);
  };

  return (
    <ApiContext.Provider value={[users, setUsers,]}>
      {!loading && props.children}
    </ApiContext.Provider>
  );
};
