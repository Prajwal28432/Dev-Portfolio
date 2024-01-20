import React from "react";

import hacker from "../../assets/hacker.png";
import Card from "../card/Card";
import emojify from "../../assets/emojify.png";
import gymfit from "../../assets/gymfit.png";
import hungerbites from "../../assets/hungerbites.png";
import viton from "../../assets/ViTon.png";
import onexam from "../../assets/On_Exam.png";
import byteChat from "../../assets/byteChat.png";
function Project() {
  const projects = [
    {
      name: "Virtual Fitting Room",
      imageUrl: viton,
      description: `Virtual try-on, also known as virtual fitting or virtual fitting room, is a technology that allows customers to try on products virtually .Developed and implemented Convolutional Neural Networks (CNN)
     `,
      viewUrl: "https://github.com/Prajwal28432/ViFR",
    },
    {
      name: "ByteChat",
      imageUrl: byteChat,
      description:
        "ByteChat is a real-time chat application developed using the MERN stack. It allows users to communicate in real-time with each other.",
      viewUrl: "https://github.com/Prajwal28432/ByteChat",
    },
    {
      name: "Emojify",
      imageUrl: emojify,
      description: `A real time application that can convert emotions into emojis.Build using Tensorflow,OpenCV,Python ,CNN algorithm,Classification`,
      viewUrl: "https://github.com/Prajwal28432/Emojify",
    },

    {
      name: "ExamSys",
      imageUrl: onexam,
      description: `An online examination system is an online testing or e-assessment system Build using CSS,JS,DjangO,ReactJs `,
      viewUrl: "https://github.com/Prajwal28432/ExamSys",
    },
    {
      name: "HungerBites",
      imageUrl: hungerbites,
      description: `Developed a responsive website that allow customers to order food and provide feedback.Design a Website using HTML,CSS and JS PHP and MySQL`,
      viewUrl: "https://github.com/Prajwal28432/Hungerbites",
    },
    {
      name: "GymFit(RestApi)",
      imageUrl: gymfit,
      description:
        "It is Api for  a fitness method and competitive sport that combines high-intensity workouts with elements from several sports (olympic weightlifting, gymnastics, and others).",
    },
    // {
    //   name: "EcomX",
    //   imageUrl: ,
    //   description: "Developed Ecommerce website using ReactJs,Redux and Firebase",
    // },
  ];
  return (
    <div id="projects" className="lg:py-20  ">
      <h1 className="text-4xl font-courier tracking-tight text-gray-900  sm:text-5xl mb-10">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 m">
        {projects.map((proj, i) => (
          <Card
            key={i}
            title={proj.name}
            imageUrl={proj.imageUrl}
            description={proj.description}
            viewUrl={proj.viewUrl}
          />
        ))}
      </div>
      <hr className="w-100 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-20 dark:bg-gray-700"></hr>
      <div
        className="absolute inset-x-0 -top-50 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-500"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}

export default Project;
