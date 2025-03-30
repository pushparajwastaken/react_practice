import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    //passing the data through the provider and we'll pass an object through it
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
