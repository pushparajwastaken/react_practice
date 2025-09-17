import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/pushparajwastaken")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-5  bg-purple-300 text-black p-4 text-3xl">
      GitHub Username: {data.login}
      <img
        src={data.avatar_url}
        alt="git picture"
        width={200}
        className="mx-auto py-4 px-3"
      />
    </div>
  );
}
export default GitHub;

export const githubinfoloader = async () => {
  const response = await fetch(
    "https://api.github.com/users/pushparajwastaken"
  ).then((response) => response.json());
  return response;
};
