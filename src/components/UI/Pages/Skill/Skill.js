import React from "react";
import html from "../../../../assets/Images/html.png";
import css from "../../../../assets/Images/css.png";
import Javascript from "../../../../assets/Images/java-script.png";
import react from "../../../../assets/Images/react.png";
import tailwindcss from "../../../../assets/Images/tailwindcss.png";
import github from "../../../../assets/Images/github.png";
import materialUI from '../../../../assets/Images/materialUI.png';
import mysql from '../../../../assets/Images/mysql.png';
import bootstrap from '../../../../assets/Images/bootstrap.png';
import wordpress from '../../../../assets/Images/wordpress.png';

const Skill = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center  text-black text-4xl uppercase font-bold mb-7 pt-10">
          Skill
        </h2>
        <div className="container mx-auto">
          <div className="flex pb-10 text-center justify-center gap-3">   
            <div className="w-fit ">
              <div class="max-w-sm w-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                  <img src={html} alt="not found" className=" w-24 h-auto " />
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  HTML
                </p>
              </div>
            </div>
            <div className="w-fit ">
              <div class="max-w-sm w-52 p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                  <img className=" w-24 h-auto" src={css} alt="not found" />
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  CSS
                </p>
              </div>
            </div>
            <div className="w-fit ">
              <div class="max-w-sm w-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                  <img
                    className=" w-24 h-auto"
                    src={Javascript}
                    alt="not found"
                  />
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Java Script
                </p>
              </div>
            </div>
          </div>

          <div className="flex pb-16 text-center justify-center gap-3">
            <div className="w-fit">
              <div class="max-w-sm w-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                  <img className=" w-24 h-auto" src={react} alt="not found" />
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  React
                </p>
              </div>
            </div>
            <div className="w-fit">
              <div class="max-w-sm w-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                  <img
                    className=" w-24 h-auto"
                    src={tailwindcss}
                    alt="not found"
                  />
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Tailwind CSS
                </p>
              </div>
            </div>
            <div className="w-fit">
              <div class="max-w-sm w-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                  <img className=" w-24 h-auto" src={github} alt="not found" />
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  GitHub
                </p>
              </div>
            </div>
          </div>

          <div className="flex pb-16 text-center justify-center gap-3">
            <div className="w-fit">
              <div class="max-w-sm w-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                  <img className=" w-24 h-auto" src={bootstrap} alt="not found" />
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Bootstrap
                </p>
              </div>
            </div>
            <div className="w-fit">
              <div class="max-w-sm w-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                  <img
                    className=" w-24 h-auto"
                    src={materialUI}
                    alt="not found"
                  />
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Material UI
                </p>
              </div>
            </div>
            <div className="w-fit">
              <div class="max-w-sm w-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                  <img className=" w-24 h-auto" src={mysql} alt="not found" />
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  mySQL
                </p>
              </div>
            </div>
          </div>

          <div className="flex pb-10 text-center justify-center gap-3">   
            <div className="w-fit float-left">
              <div class="max-w-sm w-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                  <img src={wordpress} alt="not found" className=" w-24 h-auto " />
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Wordpress
                </p>
              </div>
            </div>
            </div>


        </div>
      </div>

    </>
  );
};

export default Skill;
