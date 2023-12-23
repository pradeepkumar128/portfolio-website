import React from "react";
import "./Home.css";
import dog from "../../../../assets/Images/dog.jpg";
import Wordtyper from "../Wordtyper/Wordtyper";
import Skill from "../Skill/Skill";
import Contact from "../Contact/Contact";
import profile from "../../../../assets/Images/Profile.jpeg";

const Home = () => {
  return (
    <>
      <div className="container mx-auto mt-10 p-5">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 justify-center flex items-center ">
            <div className=" p-2">
              <p className=" text-1xl text-gray-800 capitalize">
                <b>Hello Dear,</b>
                <br />
                <p>
                  I am Pradeep Prajapati. I belong to Jaunpur from Uttar Pradesh
                  in India. I am software Engineer in &nbsp;
                  <b>Secure meta sys infoTech Pvt. Ltd. Surat.</b> &nbsp;I have{" "}
                  <b>1 Year Experience</b> in Web development field ..!
                </p>
              </p>
              <div className="mt-2">
                <Wordtyper />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-10">
            <div className="p-4">
              <div className="rounded-r-ful p-10 flex justify-center items-center">
                <img
                  src={profile}
                  alt="not found"
                  className="  shadow-lg shadow-indigo-500/50 rounded-full h-36 sm:h-60 md:h-60 lg:h-60 xl:h-60 w-auto animate-bounce delay-150 duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skill Section Here */}
      <div className="bg-slate-100">
        <Skill />
      </div>
      {/* Contact Section Here */}
      <div className="10">
        <Contact />
      </div>
    </>
  );
};

export default Home;
