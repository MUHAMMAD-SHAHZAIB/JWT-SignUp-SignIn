// eslint-disable-next-line no-unused-vars
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between w-full h-14 bg-black text-white px-8 py-2">
        <div className="self-center">Dashboard</div>
        <div className=" ">
          <button className="bg-gray-600 hover:bg-gray-700 px-10 py-2 rounded-xl">
            LogOut
          </button>
        </div>
      </div>

      <div className="text-center mt-10 font-serif font-extrabold text-3xl">
        Welecom To Dashboard
      </div>
    </>
  );
};

export default Dashboard;
