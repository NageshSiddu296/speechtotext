import React, { useState } from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    // Perform submission logic here (e.g., send data to backend or display a success message)
    console.log("Submitted:", name, email, message);

    // Reset form fields and error message
    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };

  return (
    <div className="bg-[#10256D] h-[89vh] w-full flex justify-center items-center">
      <h2 className="text-3xl md:text-5xl 2xl:text-6xl mr-20 text-gray-300 font-bold">Contact Us</h2>
      <div className="flex flex-col justify-center items-center bg-slate-400 w-[600px] h-[600px] rounded-2xl">
        
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <label className="text-2xl font-semibold" htmlFor="">Name:</label>
            <input
              className="text-lg px-2 py-1 w-[400px] rounded-xl"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <br />
          <div className="flex  flex-col gap-3">
            <label  className="text-2xl font-semibold" htmlFor="email">Email:</label>
            <input
              className="text-lg px-2 py-1 w-[400px] rounded-xl"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <br />
          <div className="flex flex-col gap-3">
            <label className="text-2xl font-semibold" htmlFor="message">Message:</label>
            <textarea
              className="text-lg px-2 py-1 w-[400px] rounded-xl"
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>
          {error && <p className="">{error}</p>}
          <div>
            <button className="w-36 text-xl mt-10   px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="flex w-full mt-10 justify-around">
        <BsInstagram className="text-5xl"/>
        <BsFacebook className="text-5xl"/>
        <BsTwitter className="text-5xl"/>
        <BsLinkedin className="text-5xl"/>
        <AiFillMail className="text-5xl"/>
      </div>
      </div>
      
    </div>
  );
};

export default ContactPage;
