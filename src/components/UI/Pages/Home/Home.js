import React from "react";
import './Home.css';
import dog from "../../../../assets/Images/dog.jpg";
import Wordtyper from "../Wordtyper/Wordtyper";
import Skill from "../Skill/Skill";
import Contact from "../Contact/Contact";


const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 justify-center flex items-center ">            
            <div className=" p-2">
              <p className=" text-1xl text-gray-800 capitalize">
               <b>Hello Dear,</b><br/>
               <p>I am Pradeep Prajapati from Jaunpur Uttar Pradesh India. I am software Engineer in &nbsp; 
                <b>Secure meta sys infoTech Pvt. Ltd. Surat.</b>  &nbsp;I have <b>1 Year Experience</b> in software development field ..!</p>
              
              </p>
              <div className="mt-2">
                <Wordtyper />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-10">
            <div className="p-4">
              <div className="rounded-r-ful p-10">
                <img
                  src={dog}
                  alt="not found"
                  className="h-80 w-auto animate-bounce delay-150 duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skill Section Here */}
      <div className="bg-slate-100">
        <Skill/>
      </div>
      {/* Contact Section Here */}
     <div className="10">
      <Contact/>
      </div> 
    </>
  );
};

export default Home;
