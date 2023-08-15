import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import profile from '../public/profile.JPG';
import React from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);


  return (
    <div className={darkMode ? "dark" : ""} >
      <Head>
        <title>C.REED | Portofolio</title>
        <meta name="portfolio" content="christopher reed's porfolio generated by next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-secondbg px-10 dark:bg-mainbg md:px-20 lg:px-40">
  <nav className={`font-rowdies hidden md:flex fixed bottom-20 right-0 py-5 md:py-6 px-6 flex flex-col justify-between items-center dark:text-white dark:bg-opacity-0 `}>
  <ul className="flex flex-col space-y-4 md:space-y-4">
    <li>
      <a href="#">0<span className="font-rowdies text-whitetxt dark:text-maintxt">0</span>. home</a>
    </li>
    <li>
      <a href="#about">0<span className="font-rowdies text-whitetxt dark:text-maintxt">1</span>. about</a>
    </li>
    <li>
      <a href="#projects">0<span className="font-rowdies text-whitetxt dark:text-maintxt">2</span>. projects</a>
    </li>
    <li>
      <a href="#experience">0<span className="font-rowdies text-whitetxt dark:text-maintxt">3</span>. experience</a>
    </li>
  </ul>
</nav>
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-rowdies text-xl">C.Reed</h1>
            <ul className="flex items-center">
              <li>
              {/* <label className="switch">
                <input type="checkbox" 
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"/>
                <span className="slider"></span>
              </label> */}
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1oqij0s66sODLOoN6PJxVG1iA8KgsZ3kc/view?usp=drive_link">
                <button className="button px-4 py-2 border-none dark:bg-secondbg rounded-md ml-8">
                <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                Resume
                </button>
                </a>
              </li>
            </ul>
          </nav>
          <div className="bg-secondbgflex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2">
        <section className="min-h-screen">
        <div className="p-0 py-4 flex items-start">
          
          <div className="flex flex-col md:flex-row">
  <div className="md:w-1/2 md:pr-5">
    <h2 className="text-5xl p-5 py-1 text-black font-rowdies dark:text-white md:text-6xl">
      Hi, I am <span className="font-rowdies text-sectxt dark:text-maintxt">Chris</span>.
    </h2>
    <p className="font-ubuntu text-left text-md py-5 text-gray-800 dark:text-gray-200 max-w-sm md:text-xl">
      I am a cybersecurity and software engineer enthusiast located in Northern Virginia.
      My interests lie in artificial intelligence, full-stack development, cybersecurity, ethical hacking,
      and penetration testing.
    </p>
  </div>
  <div className="md:w-1/2">
    <div className="md:ml-auto rounded-lg w-80 h-80 relative overflow-hidden  md:h-90 md:w-90">
      <Image src={profile} layout="fill" objectFit="cover" objectPosition="center" />
    </div>
  </div>
</div>
  </div>
  <div className="text-3xl flex justify-left gap-8 py-3 text-maintxt dark:text-maintxt">
  <a href="https://github.com/chrisreed2415" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
  </a>
  <a href="https://www.linkedin.com/in/christopher-reed-1432a01b6/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
  </a>
        </div>
            
        </section>
        <section id="about" className="min-h-screen">
        <h3 className="text-5xl p-5 py-1 text-black font-rowdies dark:text-white md:text-6xl">
               01. <span className="font-rowdies text-sectxt dark:text-maintxt">about</span>
            </h3>
            <p className="font-ubuntu text-left text-md py-5 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
          I am a recent graduate of James Madison University with a Bachelors in Business Administration with a 
          concentration in Computer Informtion Systems. I am passionate about learning new technology advancements and
          planning to grow my connections in the tech world. I keep myself busy by working on personal projects in the 
          software engineering and cyber security field. These are some technologies I have been working with :
        </p>
        
        <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li className="font-rowdies flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-maintxt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Risk Assessments</span>
    </li>
    <li className="font-rowdies flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-maintxt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>SQL</span>
    </li>
    <li className="font-rowdies flex items-center space-x-3">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-maintxt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>JavaScript</span>
    </li>
    <li className="font-rowdies flex items-center space-x-3">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-maintxt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Python</span>
    </li>
    <li className="font-rowdies flex items-center space-x-3">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-maintxt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>C#</span>
    </li>
    <li className="font-rowdies flex items-center space-x-3">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-maintxt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>MERN stack (Firebase): <span className="font-semibold text-gray-900 dark:text-white">MongoDB, Express, React.js, Node.js, Firebase</span></span>
    </li>
    <li className="font-rowdies flex items-center space-x-3">
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-maintxt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Postman, Heroku, AWS</span>
    </li>
</ul>
        </section>
        <section id="projects" className="min-h-screen">
        <h3 className="text-5xl p-5 py-9 text-black font-rowdies dark:text-white md:text-6xl">
               02. <span className="font-rowdies text-sectxt dark:text-maintxt">projects</span>
            </h3>
  <article
  className="hover:bg-white rounded-xl w-2/4 bg-secondbg p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
  >
    <span
        className="font-ubuntu whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        AWS
      </span>
  <div className="rounded-[10px] bg-gray-900 w-full p-4 !pt-20 sm:p-6">
    <time dateTime="2022-10-10" className="block text-xs text-gray-500">
      January 2023 - April 2023
    </time>

    <a href="https://github.com/chrisreed2415/Capstone_Lab">
      <h3 className=" mt-0.5 text-lg font-ubuntu text-white">
        Student office hour scheduling system.
      </h3>
    </a>

    <div className="mt-4 flex flex-wrap gap-1">
      <span
        className="whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        C#
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        SQL
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        Html & CSS(Bootstrap)
      </span>

      
    </div>
  </div>
</article>
<br></br>
<article
  className="hover:bg-white rounded-xl w-2/4 bg-secondbg p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
  >
    <span
        className="font-ubuntu whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        Postman, Heroku
      </span>

  <div className="rounded-[10px] bg-gray-900 w-full p-4 !pt-20 sm:p-6">
    <time dateTime="2022-10-10" className="block text-xs text-gray-500">
      May 2023 - Present (Currently working)
    </time>

    <a href="https://github.com/chrisreed2415/fitio_front">
      <h3 className=" mt-0.5 text-lg font-ubuntu text-white">
        FITIO - Mobile social app for athletes to schedule events.
      </h3>
    </a>

    <div className="mt-4 flex flex-wrap gap-1">
      <span
        className="whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        React.js
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        MongoDB
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        Express
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        Node.js
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        Firebase
      </span>

      
    </div>
  </div>
</article>
<br></br>
<article
  className="hover:bg-white rounded-xl w-2/4 bg-secondbg p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
  >
  <div className="rounded-[10px] bg-gray-900 w-full p-4 !pt-20 sm:p-6">
    <time dateTime="2022-10-10" className="block text-xs text-gray-500">
      May 2023 - June 2023
    </time>

    <a href="https://github.com/chrisreed2415/FinalFightasDeploy">
      <h3 className=" mt-0.5 text-lg font-ubuntu text-white">
        FinalFightas - 2 Player Fighting game with different characters and maps.
      </h3>
    </a>

    <div className="mt-4 flex flex-wrap gap-1">
      <span
        className="whitespace-nowrap rounded-full bg-secondbg px-2.5 py-0.5 text-xs text-black"
      >
        Python
      </span>

    </div>
  </div>
</article>
<br></br>
            
        </section>
        <section id="experience" className="min-h-screen">
        <h3 className="text-5xl p-5 py-40 text-black font-rowdies dark:text-white md:text-6xl">
               03. <span className="font-rowdies text-sectxt dark:text-maintxt">experience</span>
            </h3>
            <div
  className="relative block overflow-hidden w-5/6 bg-gray-900 rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-secondbg"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-white sm:text-xl">
        <span className="text-maintxt">IT Internship</span> - Livetree
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">May 2022 - July 2022</p>
    </div>
  </div>

  <div className="mt-4">
    <p className="max-w-[60ch] text-sm text-gray-500">
      - Managed and developed wordpress social pages.
    </p>
    <p className="max-w-[60ch] text-sm text-gray-500">- Developed and setup Virtual Reality Interviews.</p>
    <p className="max-w-[60ch] text-sm text-gray-500">- Conducted Social media research and engagements.</p>
      
  </div>
  <br></br>
</div>
<br></br>
<div
  className="relative block overflow-hidden w-5/6 bg-gray-900 rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-secondbg"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-white sm:text-xl">
        <span className="text-maintxt">Proprietor</span> - Shockgroupapparel
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">January 2015 - March 2018</p>
    </div>
  </div>

  <div className="mt-4">
    <p className="max-w-[60ch] text-sm text-gray-500">
      - Successfully established an e-commerce gaming apparel company
    </p>
    <p className="max-w-[60ch] text-sm text-gray-500">- Designed UI of website. </p>
    <p className="max-w-[60ch] text-sm text-gray-500">- Designed apparel and advertisements.</p>
    <p className="max-w-[60ch] text-sm text-gray-500">- Establish an international market .</p>
    <p className="max-w-[60ch] text-sm text-gray-500">- Conducted social media outreach.</p>
      
  </div>
  <br></br>
</div>
<br></br>
        </section>
      </div>
      </main>
      <footer className="bg-black">
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
  >
    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">
        </div>

      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li className="text-3xl text-gray-700 transition hover:text-gray-700/75">
        <a href="mailto:reedcm@dukes.jmu.edu">
          <AiFillMail />
          </a>
        </li>

        <li className="text-3xl text-gray-700 transition hover:text-gray-700/75">
        <a href="https://github.com/chrisreed2415" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Christopher Reed. All rights reserved &copy;.
    </p>
  </div>
</footer>
    </div>
  );
}
