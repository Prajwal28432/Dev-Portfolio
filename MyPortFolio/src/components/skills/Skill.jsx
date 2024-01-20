import React from "react";

function Skill() {
  return (
    <section id="skills" className="  font-courier  sm:py-10 md:py-16   lg:py-21">
      <div className="mb-20 ">
        <h1 className=" md:text-4xl lg:text-6xl  tracking-tight text-gray-900 sm:text-2xl">
          Skills
        </h1>
        <div
          className="absolute inset-x-0 -top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-500"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-14rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="grid grid-cols-2   lg:grid-cols-4 sm:text-xs md:text-2xl lg:text-2xl gap-7 px-2   py-2 lg:py-10 md:grid-cols-4">
          <div className="">
            <h2 className="mb-11  text-xs md:text-2xl lg:text-3xl text-indigo-600 uppercase ">
              Programming{" "}
            </h2>
            <ul className="text-gray-500 dark:text-gray-600  font-medium">
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl   " >
                <a href="#" className=" " >
                  C
                </a>
              </li>
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className="">
                  C++
                </a>
              </li>
              <li className="mb-4 p-0 text-sm md:text-2xl lg:text-2xl  text-gray-100  dark:bg-gray-900 rounded-3xl   ">
                <a href="#" className="">
                  JavaScript
                </a>
              </li>
              <li className="mb-4 p-2 p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className="">
                  Python
                </a>
              </li>
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className="">
                  Sql
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-11   text-xs md:text-2xl lg:text-3xl  text-indigo-600 uppercase ">
              Frontend
            </h2>
            <ul className="text-gray-500 dark:text-gray-600 font-medium">
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl  text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className=" ">
                  ReactJS
                </a>
              </li>
              <li className="mb-4 p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className="">
                  TailWind
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-11   text-xs md:text-2xl lg:text-3xl  text-indigo-600 uppercase ">
              Backend
            </h2>
            <ul className="text-gray-500 dark:text-gray-600 font-medium">
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl  text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className=" ">
                  NodeJs
                </a>
              </li>
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className="">
                  RestAPI
                </a>
              </li>
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className="">
                  Express.js
                </a>
              </li>
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className="">
                  Django
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-11   text-xs md:text-2xl lg:text-3xl  text-indigo-600 uppercase ">
              Other TechStack
            </h2>
            <ul className="text-gray-500 dark:text-gray-600 font-medium">
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className=" ">
                  MySql
                </a>
              </li>
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className="">
                  MongoDB
                </a>
              </li>
              <li className="mb-4  p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className="">
                  GIT
                </a>
              </li>
              <li className="mb-4 p-0 text-sm md:text-2xl lg:text-2xl text-gray-100  dark:bg-gray-900 rounded-3xl ">
                <a href="#" className="">
                  Postman
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-100 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
    </section>
  );
}

export default Skill;
