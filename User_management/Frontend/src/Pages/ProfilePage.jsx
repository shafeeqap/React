import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { LiaUserEditSolid } from "react-icons/lia";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import { useUpdateUserMutation } from "../slices/userApiSlice";
import { useUploadProfileImageMutation } from "../slices/userProfileSlice";
import { CgProfile } from "react-icons/cg";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateUserMutation();
  const [uploadProfileImage] = useUploadProfileImageMutation();

  useEffect(() => {
    console.log(userInfo, "userInfo");
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setMobile(userInfo.mobile);
      setPreviewImage(userInfo.profileImage ? userInfo.profileImage : null);

      console.log(userInfo.name);

      console.log(userInfo.profileImage, "profile image");
    }
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      let profileImagePath = userInfo.profileImage;
      if (selectedFile) {
        const { filePath } = await uploadProfileImage(selectedFile).unwrap();
        profileImagePath = filePath;
      }

      const updatedProfile = {
        _id: userInfo._id,
        name,
        email,
        mobile,
        password,
        profileImage: profileImagePath,
      };

      const res = await updateProfile(updatedProfile).unwrap();
      dispatch(setCredentials(res));
      toast.success("Profile updated");
      setShowForm(false);
    } catch (error) {
      toast.error(error?.data?.message || "Update failed");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Header />
      <div className="px-2">
        <img className="w-10 h-10" src={userInfo.profileImage} alt="" />{userInfo.name}
      </div>
      <div className="flex">
        <div className="sm:min-w-[250px] md:min-w-[350px] py-5 px-10">
          <div className="rounded-lg bg-white h-full">
            <div className="relative flex justify-center rounded-t-lg bg-teal-500 h-2/5 w-full py-20">
              <div className="relative rounded-full bg-slate-500 h-28 w-28">
                {previewImage ? (
                  <img
                    src={ previewImage }
                    alt="profile-image"
                    className="w-28 h-28 rounded-full"
                  />
                ) : (
                  <CgProfile className="w-28 h-28" />
                )}
                <div className="absolute right-0 bottom-0">
                  <label htmlFor="profileImageInput">
                    <LiaUserEditSolid className="w-6 h-6 cursor-pointer" />
                  </label>
                  <input
                    onChange={handleImageChange}
                    type="file"
                    className="hidden"
                    id="profileImageInput"
                    accept="image/*"
                  />
                </div>
                <div className="flex justify-center pt-3">
                  <h1 className="font-bold text-xl uppercase">
                    {userInfo.name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-20">
          <div className="bg-white rounded-lg w-2/3 py-20 px-10">
            <div className="border-b-2 border-black/15 pb-2">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                User Details
              </h2>
            </div>
            <div className="flex pt-6 gap-20">
              <div className="w-1/4 h-28">
                <div>
                  <h2 className="font-bold">Email Address</h2>
                  <p className="pt-4">{userInfo.email}</p>
                </div>
              </div>
              <div className="w-1/4">
                <div>
                  <h2 className="font-bold">Phone Number</h2>
                  <p className="pt-4">{userInfo.mobile}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-teal-500 p-2 rounded text-white hover:bg-teal-600"
            >
              Update Profile
            </button>

            {showForm && (
              <div className="w-full">
                <form onSubmit={submitHandler} className="pt-10">
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      User Name
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      value={name}
                      className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Email address
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      value={email}
                      className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      onChange={(e) => setMobile(e.target.value)}
                      type="text"
                      value={mobile}
                      minLength="10"
                      maxLength="10"
                      className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      value={password}
                      className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      value={confirmPassword}
                      className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-teal-500 p-2 rounded text-white hover:bg-teal-600"
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
