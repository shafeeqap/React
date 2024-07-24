import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import AdminNewUser from "../AdminNewUser/AdminNewUser";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex justify-end">
                    <div
                      onClick={onClose}
                      className="rounded-full w-8 h-8 cursor-pointer hover:bg-gray-100 flex justify-center items-center"
                    >
                      <AiOutlineClose className="size-5 hover:text-gray-600 " />
                    </div>
                  </div>
                  <div className="sm:flex sm:items-start py-5">
                    <AdminNewUser/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
