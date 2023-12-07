import { useRouter } from "next/router";
import React, { useState } from "react";
import Cookies from "js-cookie";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Cookies.set("userDetails", { email, password });
    router.push("/home");
  };

  return (
    <form className="max-w-md mx-auto mt-32" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-600 text-sm font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className={`w-full p-2 border
						 border-gray-300
					 rounded-md bg-gray-200`}
          required
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-600 text-sm font-semibold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className={`w-full p-2 border
						 border-gray-300
					 rounded-md  bg-gray-200`}
          required
          placeholder="Enter password"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
