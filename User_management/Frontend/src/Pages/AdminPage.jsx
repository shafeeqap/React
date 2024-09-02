import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Modal from "../Component/Modal/Modal";

const AdminPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openHandler = () => {
    setIsModalOpen(true);
};

const closeHandler = () => {
  setIsModalOpen(false);
};

    return (
        <>
        <Modal isOpen={isModalOpen} onClose={closeHandler}/>
            <nav className="bg-black/80 h-16 py-2 px-4 flex justify-between items-center">
                <div className="text-white font-bold">USER MANAGEMENT</div>
                <Link to="/login">
                    <button className="bg-teal-500 hover:bg-teal-600 hover:text-gray-50 flex gap-3 items-center py-1 px-4 rounded-md uppercase">
                        <CiLogout className="w-6 h-6" />
                        log out
                    </button>
                </Link>
            </nav>
            <div className="h-full w-full flex justify-center py-10">
                <div className="w-3/4 h-fit py-5">
                    <div className="w-full flex justify-end py-4">
                        <button onClick={openHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md uppercase w-32 flex justify-between items-center">
                            <FaPlus />
                            add user
                        </button>
                    </div>
                    <table className="table-auto w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-green-700 text-white">
                                <th className="px-4 py-2 border">#</th>
                                <th className="px-4 py-2 border">User Name</th>
                                <th className="px-4 py-2 border">Email</th>
                                <th className="px-4 py-2 border">Phone</th>
                                <th className="px-4 py-2 border">Status</th>
                                <th className="px-4 py-2 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-green-200">
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2 flex items-center gap-4">
                                    <div className="rounded-full bg-slate-600 w-12 h-12"></div>
                                    Shafeeq
                                </td>
                                <td className="border px-4 py-2">shafeeq@gmail.com</td>
                                <td className="border px-4 py-2">951234567</td>
                                <td className="border px-4 py-2">Active</td>
                                <td className="border px-4 py-2">
                                    <div className="flex gap-4">
                                        <FaEdit className="cursor-pointer w-6 h-6 text-blue-700" />
                                        <MdDelete className="cursor-pointer w-6 h-6 text-red-700" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border px-4 py-2">2</td>
                                <td className="border px-4 py-2 flex items-center gap-3">
                                    <div className="rounded-full bg-slate-600 w-12 h-12"></div>
                                    Shafeeq
                                </td>
                                <td className="border px-4 py-2">shafeeq@gmail.com</td>
                                <td className="border px-4 py-2">951234567</td>
                                <td className="border px-4 py-2">Active</td>
                                <td className="border px-4 py-2">
                                    <div className="flex gap-4">
                                        <FaEdit className="cursor-pointer w-6 h-6 text-blue-700" />
                                        <MdDelete className="cursor-pointer w-6 h-6 text-red-700" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdminPage;
