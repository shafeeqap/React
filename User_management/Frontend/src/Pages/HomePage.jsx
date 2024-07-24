import React from "react";
import Header from "../Component/Header/Header";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      <div className="w-full h-screen bg-gray-100">
        <div className="w-full h-32"></div>
        <div className="w-full flex justify-center">
          <div className="w-1/2 p-5 rounded-md border-2 shadow-md bg-white">
            {userInfo ? (
              <p className="text-lg font-semibold text-gray-700">
                <div className="text-2xl font-bold text-teal-600 text-center uppercase">
                  Welcome back, {userInfo.name}!
                </div>{" "}
                <br />
                We're delighted to see you again. Your presence adds so much to
                our community! As you embark on today's journey, remember that
                every step you take brings you closer to your goals. May your
                day be filled with joy, productivity, and meaningful
                connections. Please continue to explore our platform and take
                advantage of all its features.
              </p>
            ) : (
              <p className="text-xl font-bold text-gray-700">
                Good day! We hope this message finds you well. Remember, every
                day is a new opportunity to achieve greatness. Wishing you a day
                filled with positivity and success! Please login to continue
                exploring our platform and unlocking all its features. Your
                journey awaits! Thank you for being part of our community.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
