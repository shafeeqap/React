import React, { useContext, useState } from "react";
import olxLogo from "../../assets/OLX-Symbol.png";
import { CiImageOn } from "react-icons/ci";
import { FirebaseContext } from "../../Context/FirebaseContext";
import { AuthContext } from "../../Context/AuthContext";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const { storage, firestore } = useContext(FirebaseContext); 
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!name || !category || !price || !image || !user) {
      console.error("All fields are required");
      return;
    }

    const storageRef = ref(storage, `/image/${image.name}`);
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        console.log(url);
        return addDoc(collection(firestore, "items"), {
          name,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: date.toString(),
        });
      })
      .then(() => {
        console.log("Item added to Firestore");
        navigate('/'); 
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
      });
  };

  return (
    <div>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src={olxLogo} alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 uppercase">
                      Post your Ad
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                          Name
                        </label>
                        <div className="mt-2">
                          <input
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                            Category
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            onChange={(e) => setCategory(e.target.value)}
                            id="category"
                            name="category"
                            type="text"
                            value={category}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                            Price
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            onChange={(e) => setPrice(e.target.value)}
                            id="price"
                            name="price"
                            type="number"
                            value={price}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="w-[100px] h-[100px]">
                        {image ? (
                          <img
                            src={URL.createObjectURL(image)}
                            className="w-full h-full"
                            alt="selected"
                          />
                        ) : (
                          <CiImageOn className="w-full h-full text-gray-500" />
                        )}
                      </div>
                      <div>
                        <input
                          onChange={(e) => setImage(e.target.files[0])}
                          type="file"
                          required
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-cyan-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Upload
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
