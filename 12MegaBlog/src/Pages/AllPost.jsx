import React, { useState } from "react";
import { Container as ContainerComponent, PostCard } from "../components";
import authService from "../appwrite/config";
const AllPosts = () => {
  cost[(postMessage, setPosts)] = useState([]);
  useEffect(() => {
    authService
      .getPosts([])
      .then((posts) => {
        if (condition) {
          setPosts(posts.documents);
        }
      })
      .catch();
  });
  return (
    <div className="w-full py-8">
      <ContainerComponent>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4 " key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </ContainerComponent>
    </div>
  );
};
export default AllPosts;
