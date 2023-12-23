import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import developer from "../../../../assets/Images/developer.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-indigo-100 shadow  dark:bg-gray-900 p-5 ">
        <div className="w-full max-w-screen-xl mx-auto md:py-8 p-36">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center block font-bold text-2xl font-semibold whitespace-nowrap dark:text-white">
                <img
                  src={developer}
                  alt="not found"
                  className="max-w-full h-auto w-16"
                />
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li className="text-2xl m-2">
                <Link to="https://www.instagram.com/ipradeepprajapat/?igsh=MXQzNHF5bHdia3Nodg%3D%3D">
                  <FontAwesomeIcon icon={faInstagramSquare} title="instagram" />
                </Link>
              </li>
              <li className="text-2xl m-2">
                <Link to="https://www.linkedin.com/in/pradeep-prajapati-614079223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&challengeId=AQGuHJ9Ox8LX5wAAAYyS-13MpT6fxcr8Y_W56gzk4Ch0PWJ1EpfGDiOfSloIWZrbvew-3a8k96E3ohwR2cUoDubGTI-02TjKqQ&submissionId=7bdf65f3-c33d-a317-eefe-77b834718765&challengeSource=AgHpaI29ZhNhJwAAAYyS-2oInJQ9tDLSi13-G0Bf7fj5J5wZNEP5Jl0KPQtPofs&challegeType=AgGcMkXAUHF9QwAAAYyS-2oL2cWi08MtEpYrgCeSvOSNWe02bkuwut4&memberId=AgH92Loj6PsgZAAAAYyS-2oObVAPfs20GvYCY4uPNCCn3AA&recognizeDevice=AgFDkjSyjEpZ0QAAAYyS-2oR33L4vx-zn1KMnCuNv5zoRFRm2lTy">
                  <FontAwesomeIcon icon={faLinkedin} title="Linkedin" />
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="#" className="hover:underline">
              Flowbite™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
