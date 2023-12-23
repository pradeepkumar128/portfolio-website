import React from "react";
import skillData from "../../../API/SkillData";

const Skill = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-black text-4xl uppercase font-bold mb-7 pt-10">
          Skills
        </h2>
        <div className="container mx-auto pb-20">
          <div className="flex flex-wrap justify-center gap-3">
            {skillData.map((skill, index) => (
              <div className="w-fit" key={index}>
                <div className="max-w-sm w-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-center flex">
                    <img
                      src={skill.imgURL}
                      alt={skill.title}
                      className="w-24 h-auto"
                    />
                  </h5>
                  <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {skill.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
