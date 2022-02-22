import React, { useState } from "react";

function Modal({ toggle, averageTotal }) {
  return (
    <div>
      <div className=" overflow-y-auto overflow-x-hidden fixed right-20 left-40 top-40 z-50 justify-center ">
        <div className="relative px-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-orange-100 rounded-lg shadow dark:bg-white-700">
            <div class="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="popup-modal"
                onClick={toggle}
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="p-6 pt-0 text-center">
              CLASS AVERAGE
              <h3 class="mb-5 text-9xl font-normal text-black ">
                {averageTotal}
              </h3>
              <button
                onClick={toggle}
                data-modal-toggle="popup-modal"
                type="button"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
