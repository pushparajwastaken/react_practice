import { useContext, useState } from "react";
import userContext from "../../context/usercontext";
const Profile = () => {
  const { user } = useContext(userContext);
  if (!user) {
    return <div>Login kar na baba</div>;
  } else {
    return <div>Kya baat hai bhidu!Tera naam {user.username} hai na?</div>;
  }
};
export default Profile;
