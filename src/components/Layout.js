import React, { useState } from "react";
import logo from "../img/logo (1).png";
import circle_1 from "../img/number-circle-one-thin-svgrepo-com.svg";
import circle_2 from "../img/number-circle-two-thin-svgrepo-com.svg";
import circle_3 from "../img/number-circle-three-thin-svgrepo-com.svg";
import image_layout from "../img/auth.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import TeacherCard from "./TeacherCard";
import Proposition from "./Proposition";
import Paiement from "./Paiement";

const Layout = () => {
  const [formStep, setFormStep] = useState(0);
  const [matiere, setMatiere] = useState('')

  

  const nextForm = () => {
    setFormStep((cur) => cur + 1);
  };
  const prevForm = () => {
    setFormStep((cur) => cur - 1);
  };

  const renderButtonNext = () => {
    if (formStep > 2) {
      return undefined;
    } else if (formStep === 2) {
      return <button type="button">Finish</button>;
    } else {
      return (
        <button
          onClick={nextForm}
          type="button"
          class="translate-y-4 inline-block md:px-4 px-2 md:py-2 py-1 border-2 md:text-sm text-xs  border-blue-600 text-blue-600 font-medium leading-tight uppercase rounded-full hover:text-blue-700  focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out md:w-36 w-24 "
        >
          Suivant
        </button>
      );
    }
  };
  const renderButtonPrev = () => {
    if (formStep <= 0) {
      return undefined;
    } else if (formStep === 2) {
      return (
        <button
          onClick={prevForm}
          type="button"
          className="translate-y-4 text-sm text-gray-700 font-medium leading-tight uppercase hover:text-blue-700  focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out md:w-36 w-24"
        >
          Precédent
        </button>
      );
    } else {
      return (
        <button
          onClick={prevForm}
          type="button"
          className=" translate-y-4 md:text-sm text-xs text-gray-700 font-medium leading-tight uppercase hover:text-blue-700  focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out w-36 w-24"
        >
          Precédent
        </button>
      );
    }
  };

  const handleChange = (index) => {
    setFormStep(index);
  };

  return (
    <div className="flex overflow-hidden">
      <div className="w-1/4 bg-gray-200 h-screen hidden md:block text-md xl:text-2xl">
        <div className="mt-6 mx-10 ">
          <img src={logo} alt="logo" className="xl:w-40 w-32" />
        </div>
        <div className="mx-12 mt-16 text-gray-400">...</div>
        <div className="mt-4 mx-auto space-y-4 text-blue-600 text-bold ">
          <div
            onClick={() => handleChange(0)}
            className="flex space-x-2 text-center w-3/4 mx-auto "
          >
            {formStep === 0 ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-6 text-green-400"
              />
            ) : (
              <img src={circle_1} alt="logo" className="w-6 " />
            )}
            <p className={formStep === 0 ? "text-gray-600" : ""}>
              Votre demande
            </p>
          </div>

          <div
            onClick={() => handleChange(1)}
            className="flex space-x-2 w-3/4 mx-auto"
          >
            {formStep === 1 ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-6 text-green-400"
              />
            ) : (
                <img src={circle_2} alt="logo" className="w-6 " />
            )}
            
            <p className={formStep === 1? "text-gray-600" : ""}>Nos propoditions</p>
          </div>
          <div
            onClick={() => handleChange(2)}
            className="flex space-x-2 w-3/4 mx-auto"
          >
            {formStep === 2 ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-6 text-green-400"
              />
            ) : (
            <img src={circle_3} alt="logo" className="w-6 " />
            )}
            <p className={formStep === 2 ? "text-gray-600" : ""}>Paiement</p>
          </div>
        </div>
        <div>
          <img src={image_layout} alt="" className="xl:w-56 w-40 mt-56 mx-auto" />
        </div>
      </div>

      <div className="md:w-3/4 h-screen w-full ">
        <div className="space-y-3 text-center">
          <div className="text-sm md:text-lg text-blue-800 font-semibold mt-2">
            <p>En quelle matière avez-vous besoin d'aide ?</p>
          </div>
          <div class="flex justify-center">
            <div class="pt-2 relative mx-auto text-gray-600 md:w-2/6">
              <input
                class=" bg-gray-200 md:h-10 h-6 md:px-5 px-3 md:pr-16 pr-8 rounded-lg text-sm focus:outline-none w-full md:w-full"
                type="search"
                name="search"
                placeholder="Search"

                onChange={(e) => setMatiere(e.target.value)}


              />

              <button type="submit" class="absolute right-0 top-0 md:mt-5 md:mr-4 mt-3 mr-2">
                <svg
                  class="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.966 56.966"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="md:text-lg text-sm text-blue-800 font-semibold">
            <p className="ml-2">
              Les teachers d {matiere} qui pourraient vous comprendre
            </p>
          </div>
        </div>

        <div>
          {formStep === 0 && (<TeacherCard />)}
          {formStep === 1 && <Proposition />}
          {formStep === 2 && <Paiement />}
        </div>

        <div className="flex md:mt-4 mt-2 justify-around md:w-1/2 mx-auto">
          <div class="flex space-x-2 justify-center">{renderButtonPrev()}</div>
          <div class="flex space-x-2 justify-center">{renderButtonNext()}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
