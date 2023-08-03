// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { signin } from "../ulits/api";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signin(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" bg-black/25 border-4 border-black/[0.2] w-80  h-100 p-5">
        <h1 className="text-center text-xl font-semibold">SignIn Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
          <div className="flex  flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex  flex-col gap-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col ">
            <button
              className="bg-blue-500 p-2 rounded-lg w-full text-white"
              type="submit"
            >
              Sign Up
            </button>
            <p className="self-center mt-2">
              Dont Have account
              <a
                href=""
                className="border-b-2 border-b-blue-700 text-blue-700 mx-1"
              >
                SignUp here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
