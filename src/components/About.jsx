import React from "react";
const About = () => {
  return (
    <div className="bg-[#10256D] h-[89vh] px-10 py-10">
      <div className=" w-full text-3xl md:text-4xl 2xl:text-6xl px-10 py-10 text-white">

        <h1>About</h1>
      </div>
      <div className="flex justify-center items-center px-5 py-5 text-xl md:text-2xl 2xl:text-4xl text-justify text-white gap-10 flex-col  xl:flex-row ">
        <p>
          Welcome to our innovative Speech-to-Text Converter app! We are excited
          to bring you a powerful and intuitive tool that transforms spoken
          words into written text effortlessly. Whether you need to transcribe
          audio recordings, capture lecture notes, create accurate subtitles, or
          simply dictate your thoughts, our app is here to streamline the
          process and make your life easier.
        </p>
        <img
          src="https://fireflies.ai/blog/content/images/2022/12/Speech-to-Text-Software--1-.jpg"
          alt=""
          className="w-[600px] h-[400px] object-contain rounded-3xl"
        />
      </div>
    </div>
  );
};
export default About;
