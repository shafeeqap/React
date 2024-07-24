import { RiCloseLargeFill } from "react-icons/ri";
import olxLogo from "../../assets/OLX-Symbol.png";
import { useContext, useState } from "react";
import { FirebaseContext } from "../../Context/FirebaseContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const { setSignupPop, setLoginWithEmail  } = props;
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {auth, firestore } = useContext(FirebaseContext)
  const [error, setError] = useState(null);
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: userName });
      await addDoc(collection(firestore, 'users'),{
          id:result.user.uid,
          userName:userName,
          phone:phone
        }).then(() => {
          console.log('signing up success');
          navigate('/login');
        });
        
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already in use. Please try another email.');
      } else {
        setError('Error signing up. Please try again.');
      }
      console.error("Error signing up: ", error);
    }
  };



  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[380px] sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

              <div onClick={() => setSignupPop(false)} className="flex justify-end cursor-pointer">
                <RiCloseLargeFill />
              </div>

                  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                      <img
                        className="mx-auto h-10 w-auto"
                        src={olxLogo}
                        alt="Your Company"
                      />
                      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                      </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                      <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                      <div>
                          <label
                            htmlFor=""
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            User Name
                          </label>
                          <div className="mt-2">
                            <input
                            onChange={(e)=>setUserName(e.target.value)}
                              id="userName"
                              name="userName"
                              type="text"
                              value={userName}
                              // autoComplete=""
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                            onChange={(e)=>setEmail(e.target.value)}
                              id="email"
                              name="email"
                              type="email"
                              value={email}
                              autoComplete="email"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone Number
                          </label>
                          <div className="mt-2">
                            <input
                            onChange={(e)=>setPhone(e.target.value)}
                              id="phone"
                              name="phone"
                              type="phone"
                              value={phone}
                              autoComplete="phone"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Password
                            </label>
                        
                          </div>
                          <div className="mt-2">
                            <input
                            onChange={(e)=>setPassword(e.target.value)}
                              id="password"
                              name="password"
                              type="password"
                              value={password}
                              autoComplete="current-password"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-cyan-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Sign in
                          </button>
                        </div>        
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                      </form>

                      <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account ?{" "}
                        <span
                        onClick={()=>{setSignupPop(false); setLoginWithEmail(true)}}
                          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
                        >
                          Login
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
