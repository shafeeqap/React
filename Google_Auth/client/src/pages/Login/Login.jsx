import loginImag from "../../assets/images/login.jpg";
import google from "../../assets/images/google.png";


const Login = () => {
  const googleAuth = () => {
    window.open("http://localhost:3000/auth/google", "_self");
  };


  return (
    <div className=" bg-gray-300">
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <div className="flex justify-between bg-white border rounded-2xl overflow-hidden">
          <div className="flex justify-center items-center overflow-hidden w-1/2">
            <img src={loginImag} alt="" className="w-72" />
          </div>
          <div className="bg-red- flex justify-center items-center p-3">
            <div className="flex flex-col justify-center items-center p-4">
              <div className="py-5">
                <p className="font-medium text-2xl">Log in</p>
              </div>
              <form action="">
                <div className="mb-2 p-1">
                  <input
                    type="text"
                    placeholder="Email"
                    className="p-1 border rounded"
                  />
                </div>
                <div className="mb-2 p-1">
                  <input
                    type="password"
                    placeholder="Password"
                    className="p-1 border rounded"
                  />
                </div>
                <div className="mb-2 p-1 flex justify-center">
                  <button className="bg-yellow-400 p-1 rounded-md w-20 hover:bg-yellow-500">
                    Login
                  </button>
                </div>
              </form>
              <p className="py-2">or</p>
              <div
                onClick={googleAuth}
                className="flex items-center justify-between mb-2 p-1 px-3 gap-4 border rounded-md cursor-pointer hover:bg-gray-100"
              >
                <img src={google} alt="" className="w-4 h-4" />
                <p className="">Sign in with Google</p>
              </div>
              <div className="flex gap-2 mb-5">
                <p className="text-sm text-gray-400">Don’t have an account?</p>
                <span className="text-sm cursor-pointer hover:underline">
                  Sign up
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
