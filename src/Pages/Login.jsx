import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9fb]">
      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-5 lg:px-4 lg:my-30 mt-30 w-full max-w-sm md:max-w-xs lg:max-w-xs">
        <div className="flex flex-col items-center mb-6">
          <button
            className={`px-6 py-1 rounded-full mb-4 font-semibold text-base ${
              isLogin
                ? "bg-[#e6e9f5] text-[#223A90]"
                : "bg-[#e6e9f5] text-gray-500"
            }`}
            disabled
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
        {isLogin ? (
          // Login Form
          <form className="space-y-3">
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border rounded-full px-3 py-2 outline-none bg-[#f9f9fb] text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full border rounded-full px-3 py-2 outline-none bg-[#f9f9fb] text-sm"
                />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-400"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={0}
                  role="button"
                >
                  👁️
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-500 italic mb-2">
              Forgot Password?
            </div>
            <button
              type="submit"
              className="w-full bg-[#223A90] text-white rounded-full py-2 text-sm font-semibold hover:bg-[#1a2e6c] transition"
            >
              Login
            </button>
            <div className="text-center text-xs mt-2">
              New on the platform?{" "}
              <span
                className="text-[#223A90] font-semibold cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </span>
            </div>
          </form>
        ) : (
          // Sign Up Form
          <form className="space-y-3">
            <div>
              <label className="block text-gray-700 mb-1 text-sm">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g John Doe"
                className="w-full border rounded-full px-3 py-2 outline-none bg-[#f9f9fb] text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border rounded-full px-3 py-2 outline-none bg-[#f9f9fb] text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border rounded-full px-3 py-2 outline-none bg-[#f9f9fb] text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">
                State of Residence
              </label>
              <select
                className="w-full border rounded-full px-3 py-2 outline-none bg-[#f9f9fb] appearance-none focus:ring-2 focus:ring-[#223A90] text-gray-700 text-sm"
                style={{ minHeight: "36px" }}
              >
                <option className="text-gray-400">State</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Kano</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">LGA</label>
              <select
                className="w-full border rounded-full px-3 py-2 outline-none bg-[#f9f9fb] appearance-none focus:ring-2 focus:ring-[#223A90] text-gray-700 text-sm"
                style={{ minHeight: "36px" }}
              >
                <option className="text-gray-400">LGA</option>
                <option>Ikeja</option>
                <option>Gwagwalada</option>
                <option>Nassarawa</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full border rounded-full px-3 py-2 outline-none bg-[#f9f9fb] text-sm"
                />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-400"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={0}
                  role="button"
                >
                  👁️
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#223A90] text-white rounded-full py-2 text-sm font-semibold hover:bg-[#1a2e6c] transition"
            >
              Sign Up
            </button>
            <div className="text-center text-xs mt-2">
              Already have an account?{" "}
              <span
                className="text-[#223A90] font-semibold cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </div>
            <div className="flex items-center justify-center mt-2">
              <input type="checkbox" id="newsletter" className="mr-2" />
              <label htmlFor="newsletter" className="text-xs text-gray-500">
                Subscribe to our newsletter
              </label>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
export default Login;
