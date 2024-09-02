const Home = (userDetails) => {
  const user = userDetails.user;

  const logout = () => {
    window.open("http://localhost:3000/auth/logout", "_self");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col justify-center items-center border py-5 px-5 bg-white">
        <h1 className="font-bold text-lg">Home Page</h1>
        <div className="py-5 flex flex-col justify-center items-center">
          <img src={user.profileImage} alt="" className="rounded-full border border-black/20" />
          <p>{user.displayName}</p>
          <p>{user.email}</p>
        </div>
        <div>
          <button onClick={logout} className="bg-red-500 uppercase p-1 w-20 rounded">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
