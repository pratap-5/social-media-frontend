import React, { useEffect, useState } from "react";
import Post from "./Post";
import useGetPost from "../../hooks/useGetPost";

function Posts() {
  const [usersPost, setPosts] = useState([]);
  const { loading, getPosts } = useGetPost();
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();

      if (posts) setPosts(posts);
      else {
        console.log("data is not getting");
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="  w-full h-full  grid grid-cols-1  bg-slate-100 justify-start gap-3 overflow-y-auto ">
      {loading ? (
        <span className=" loading loading-spinner"></span>
      ) : (
        usersPost?.map((user, ind) => <Post key={ind} user={user} />)
      )}
    </div>
  );
}

export default Posts;
