import React from "react";
import useFetch from "./useFetch";

const Post = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      <h1>Post</h1>
      {data &&
        data.map((item) => (
          <ul key={item.id}>
            <li>Titile: {item.title}</li>
            <li>Body: {item.body}</li>
          </ul>
        ))}
    </div>
  );
};

export default Post;
