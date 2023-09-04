import React, { useState } from 'react';
import { BsPersonCircle } from "react-icons/bs";
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      // Perform successful login logic here (e.g., redirect user or set authentication token)
      console.log('Logged in successfully');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="bg-[#10256D] h-[89vh] w-full flex justify-center items-center">
      <div className=" bg-slate-400 w-[600px] h-[600px] rounded-2xl">
      <BsPersonCircle className='text-center text-8xl m-auto mt-5'/>
      <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col mt-16'>
        <div className="flex flex-col gap-3 px-7">
          <label className="text-2xl font-semibold" htmlFor="username">Username:</label>
          <input className="text-lg px-2 py-1 w-[400px] rounded-xl"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <br/>
        <div className="flex flex-col gap-3 px-7">
          <label className="text-2xl font-semibold" htmlFor="password">Password:</label>
          <input className="text-lg px-2 py-1 w-[400px] rounded-xl"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {error && <p className="">{error}</p>}
        <div className="" >
        <button className="w-36 text-xl mt-10   px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" type="submit">
              LogIn
            </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
