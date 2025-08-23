import React from "react";
import PasswordBtn from "./PasswordBtn";

const PasswordManager = () => {
  return (
    <section
      id="password-manager"
      className="relative min-h-screen flex items-start justify-center" // ensures section fills screen, content starts lower
    >
      {/* background */}
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-white 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        bg-[size:6rem_4rem]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      {/* content */}
      <div className="myContainer flex flex-col items-center text-center space-y-6 mt-10">
        <div className="container">
          {/* Heading */}
          <h1 className="text-gray-800 text-3xl">
            <span className="font-normal">&lt; </span>
            PASS<span className="text-green-500">OP</span>
            <span className="font-normal"> /&gt;</span>
          </h1>
          <p className="text-lg text-gray-600">Your Own Password Manager</p>

          {/* Inputs */}
          <div className="inputs w-full flex flex-col items-center space-y-6 mt-6">
            {/* Top input (full width, centered) */}
            <input
              type="text"
              className="w-3/4 py-3 px-6 rounded-xl border border-green-800 text-green-900
               placeholder-gray-500 focus:bg-green-100 focus:border-green-500
               focus:outline-none transition"
              placeholder="Enter Task"
            />

            {/* Bottom two inputs with spacing */}
            <div className="flex w-3/4 gap-6 mt-5">
              <input
                type="text"
                className="w-1/2 py-3 px-6 rounded-xl border border-green-800 text-green-900
                 placeholder-gray-500 focus:bg-green-100 focus:border-green-500
                 focus:outline-none transition"
                placeholder="Enter Task"
              />
              <input
                type="text"
                className="w-1/2 py-3 px-6 rounded-xl border border-green-800 text-green-900
                 placeholder-gray-500 focus:bg-green-100 focus:border-green-500
                 focus:outline-none transition"
                placeholder="Enter Task"
              />
            </div>
            <div className="button flex items-center justify-around gap-3">
              <PasswordBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordManager;
