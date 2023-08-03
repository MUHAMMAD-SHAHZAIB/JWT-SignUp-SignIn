// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { signup } from "../ulits/api";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" bg-black/25 border-4 border-black/[0.2] w-80  h-100 p-5">
        <h1 className="text-center text-xl font-semibold">SignUp Form</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
          <div className="flex  flex-col gap-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-1 rounded outline-none"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex  flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-1 rounded outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex  flex-col gap-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="p-1 rounded outline-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex  flex-col gap-2">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="p-1 rounded outline-none"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col ">
            <button
              className="bg-blue-500 p-2 rounded-lg w-full text-white"
              type="submit"
            >
              Sig Up
            </button>
            <p className="self-center mt-2">
              Have already account{" "}
              <a
                href=""
                className="border-b-2 border-b-blue-700 text-blue-700 "
              >
                signIn here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
