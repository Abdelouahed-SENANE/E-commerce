import { useState } from "react";
import { FaXmark } from "react-icons/fa6";


const Modal = ({ Form , stateModal , closeModal}) => {



  return (
    <>
      {stateModal && (
        <>
        <div className="fixed top-0 left-0 h-full w-full bg-black/50 z-30" onClick={closeModal}></div>
        <div className={`bg-white p-5 w-[450px] rounded-sm fixed transition-all ease-in-out duration-500  top-[200px] left-[50%] translate-x-[-50%] z-50`}>
          <button className="absolute top-2 right-2 text-gray-400 text-xl hover:text-gray-800 transition-all duration-300" onClick={closeModal}>
            <FaXmark/>
          </button>
          {Form}
        </div>
        </>
      )}
            
    </>
  )
}

export default Modal;
