import React, { useEffect, useState } from "react";
function GitHub() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-5  bg-purple-300 text-black p-4 text-3xl">
      GitHub Followers: {data.followers}
    </div>
  );
}
export default GitHub;
