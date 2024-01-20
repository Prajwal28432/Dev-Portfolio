import { useState } from "react";
import pdf from '../../resume/prajwal_resume.pdf'
import hacker from "../../assets/hacker.png";
import { FaDownload } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div id="home" className="bg-white ">
      <div className="relative isolate px-6  lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-200 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-40 sm:py-28 lg:py-26">
          <div className="text-center">
            <div className="font-courier">
              <img
                src={hacker}
                className="sm:max-w-full mt-300 md:mt-30 lg:mt-30 justify-items-center sm:w-36 md:w-48  xl:w-64"
                style={{ width: "200px", margin: "0 auto" }}
              ></img>
            <p className="text-lg md:text-5xl lg:text-6xl font-tracking-tight text-gray-900">
                Prajwal Farkunde
              </p>
              <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600">
                Hello! 👋 I'm a CS student with a deep passion for software
                development. I am on a journey to become a skilled and
                innovative software developer.
              </p>
            </div>  
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Me
              </a> */}
              <a
                href={pdf}
                download="Prajwal"
        target="_blank"
        rel="noreferrer"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>Resume</div>
                  <div style={{ marginLeft: "5px" }}>
                    <FaDownload />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-100 h-1 mx-auto   bg-gray-100 border-0 rounded md:my-0 dark:bg-gray-700"></hr>
    </div>
  );
}
