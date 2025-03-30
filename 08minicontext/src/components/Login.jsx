import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //fetching values inside the usercontext
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault(); //we've prevented default because on clicking submit the values goes somewhere through the url

    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      {"       "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Login;
