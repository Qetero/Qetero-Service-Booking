import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Modal = ({ isOpen, setIsOpen, data }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/80"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-200 w-11/12 max-w-sm min-h-56 text-center p-4 rounded-md "
          >
            <IoMdCheckmarkCircleOutline className="text-green-500 text-7xl mx-auto" />
            <p className="p-3">{data.title}</p>
            <p>{data.message}</p>
            <button
              className="bg-green-500 text-white p-2 min-w-24 mt-8 rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
