import React, { useState } from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import lottifile from '../../assets/Registe.json'

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-green-100 px-4">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full max-w-6xl mx-auto py-6">
        {/* Register Form */}
        <div className="w-full lg:w-5/12 p-8 bg-white shadow-xl rounded-2xl">
         <div className="flex justify-center mb-2">
         <img src="https://i.ibb.co/1f2vNxWk/edited-photo-1.png" 
         alt="logo"
         className="w-20 h-20 rounded-full object-cover"
          
          />
        </div>
         <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">
           Register your account
         </h2>
          <form className="space-y-5">
            {["name", "email", "password", "phone"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 text-slate-900 capitalize">
                  {field === "name"
                    ? "Full Name"
                    : field === "phone"
                    ? "Phone"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "name"
                      ? "John Doe"
                      : field === "email"
                      ? "example@mail.com"
                      : field === "password"
                      ? "********"
                      : "+8801XXXXXXXXX"
                  }
                  className="w-full bg-green-50 px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-900"
                />
              </div>
            ))}

            {/* Role Select */}
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-900">
                Register As
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-700 text-slate-900"
              >
                <option value="Student">Student</option>
                <option value="Tutor">Tutor</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-2 rounded-xl hover:bg-slate-900 font-semibold transition-all"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-5 text-sm text-slate-900">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-slate-900 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Lottie animationData={lottifile} loop={true} />
        </div>
      </div>

     
    </div>
  );
};

export default Register;
