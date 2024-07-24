import React, { useContext } from "react";
import image from "../assets/image.jpg";
import { UserContext } from "../Context/userContext";

const Home = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex w-1/2 p-5">
        <div className="w-full h-1/4 mt-32 ml-10">
          <div>
            <h3 className="text-2xl text-blue-400">Hello,</h3>
            {user && <p>{user.name}</p>}
          </div>
          <h1 className="font-semibold text-5xl capitalize">
            Welcome home page
          </h1>
          <div className="py-5">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis labore excepturi sed ipsa incidunt veniam numquam,
              voluptates, itaque aliquid exercitationem a quo earum, minus
              recusandae dolores? Delectus odit sed quasi?
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen w-1/2">
        <div className="flex justify-center">
          <img src={image} alt="" className="w-4/6" />
        </div>
      </div>
    </div>
  );
};

export default Home;
