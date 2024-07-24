import React, {useContext} from "react";
import { FaRupeeSign } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";

const Details = ({ setDetailsPop, product }) => {
  const {user} = useContext(AuthContext)

  
  return (
    <div className="relative z-10" role="dialog" aria-modal="true">
      <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <div
                onClick={() => setDetailsPop(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 py-10">
                <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                  <img
                    className="object-cover object-center"
                    src={product?.url ? product.url : product.image}
                    alt="product"
                  />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <section aria-labelledby="information-heading" className="mt-2 border border-black py-4 px-4 rounded-md">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>
                    <div className="flex items-center text-3xl">
                      <FaRupeeSign />
                      <h1 className="font-bold text-3xl">
                        {product?.price}
                      </h1>
                    </div>
                    <h1 className="pt-2">
                      <span className="font-semibold">Category</span> :{" "}
                      {product?.category}
                    </h1>
                    <h1 className="pt-2">
                      <span className="font-semibold">Title</span> :{" "}
                      {product?.title ? product.title : product.name}
                    </h1>
                    <h1 className="pt-2">
                      <span className="font-semibold">Description</span> :{" "}
                      {product?.description}
                    </h1>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-2 border border-black py-4 px-4 rounded-md">
                    <h1 className="font-semibold">Seller Details</h1>
                    <p>Name : {user.displayName}</p>
                    {/* <p>Address</p> */}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
