import React from 'react';
import image_libre from "../img/imglibre.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faComments,
  faGraduationCap,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";


library.add(far, faStar);

const TeacherCard = () => {
    return (
        <div className="mx-4 overflow-x-auto overflow-y-hidden py-1 pb-5 flex space-x-4">
          <div className=" mt-14 ">
            <div className="md:w-80 w-72 shadow-lg rounded-2xl flex-shrink-0 bg-blue-100">
              <img
                class="mb-3 w-20 h-20 rounded-full shadow-lg -translate-y-12 mx-auto"
                src={image_libre}
                alt="Bonniz"
              />
              <h5 className="md:text-lg text-sm text-blue-800 font-bold text-center -mt-3 -translate-y-8 ">
                Abdoulaye Salihou
              </h5>
              <div className="text-yellow-500 md:text-lg text-sm -translate-y-8 md:-translate-y-10 text-center">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon={["far", "star"]} />
              </div>
              <p className="text-center md:-translate-y-10 -translate-y-8 text-xs text-gray-500">
                20 heures données
              </p>
              <div className="space-y-2 md:text-sm text-xs md:-translate-y-8 -translate-y-6 text-blue-700 font-semibold mx-8">
                <div className="flex space-x-2  ">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <p>HEC, 1ère année</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faComments} />
                  <p>Bilingue</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p>Diplomé vérifié</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>Paris</p>
                </div>
                <div className="space-y-1">
                  <h3 className="md:text-lg text-sm text-blue-800 font-semibold">
                    Description
                  </h3>
                  <p className="md:text-sm text-xs text-gray-500 text-justify ">
                    Debitis molestias repudiandae maxime non, amet saepe maiores
                    harum. Doloribus repellendus voluptatum error.
                  </p>
                </div>
              </div>

              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class="translate-y-4 inline-block md:px-6 py-2.5 px-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-36"
                >
                  Choisir
                </button>
              </div>
            </div>
          </div>   
          <div className=" mt-14 ">
            <div className="md:w-80 w-72 shadow-lg rounded-2xl flex-shrink-0 bg-blue-100">
              <img
                class="mb-3 w-20 h-20 rounded-full shadow-lg -translate-y-12 mx-auto"
                src={image_libre}
                alt="Bonniz"
              />
              <h5 className="md:text-lg text-sm text-blue-800 font-bold text-center -mt-3 -translate-y-8 ">
                Abdoulaye Salihou
              </h5>
              <div className="text-yellow-500 md:text-lg text-sm -translate-y-8 md:-translate-y-10 text-center">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon={["far", "star"]} />
              </div>
              <p className="text-center md:-translate-y-10 -translate-y-8 text-xs text-gray-500">
                20 heures données
              </p>
              <div className="space-y-2 md:text-sm text-xs md:-translate-y-8 -translate-y-6 text-blue-700 font-semibold mx-8">
                <div className="flex space-x-2  ">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <p>HEC, 1ère année</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faComments} />
                  <p>Bilingue</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p>Diplomé vérifié</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>Paris</p>
                </div>
                <div className="space-y-1">
                  <h3 className="md:text-lg text-sm text-blue-800 font-semibold">
                    Description
                  </h3>
                  <p className="md:text-sm text-xs text-gray-500 text-justify ">
                    Debitis molestias repudiandae maxime non, amet saepe maiores
                    harum. Doloribus repellendus voluptatum error.
                  </p>
                </div>
              </div>

              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class="translate-y-4 inline-block md:px-6 py-2.5 px-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-36"
                >
                  Choisir
                </button>
              </div>
            </div>
          </div>   
          <div className=" mt-14 ">
            <div className="md:w-80 w-72 shadow-lg rounded-2xl flex-shrink-0 bg-blue-100">
              <img
                class="mb-3 w-20 h-20 rounded-full shadow-lg -translate-y-12 mx-auto"
                src={image_libre}
                alt="Bonniz"
              />
              <h5 className="md:text-lg text-sm text-blue-800 font-bold text-center -mt-3 -translate-y-8 ">
                Abdoulaye Salihou
              </h5>
              <div className="text-yellow-500 md:text-lg text-sm -translate-y-8 md:-translate-y-10 text-center">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon={["far", "star"]} />
              </div>
              <p className="text-center md:-translate-y-10 -translate-y-8 text-xs text-gray-500">
                20 heures données
              </p>
              <div className="space-y-2 md:text-sm text-xs md:-translate-y-8 -translate-y-6 text-blue-700 font-semibold mx-8">
                <div className="flex space-x-2  ">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <p>HEC, 1ère année</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faComments} />
                  <p>Bilingue</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p>Diplomé vérifié</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>Paris</p>
                </div>
                <div className="space-y-1">
                  <h3 className="md:text-lg text-sm text-blue-800 font-semibold">
                    Description
                  </h3>
                  <p className="md:text-sm text-xs text-gray-500 text-justify ">
                    Debitis molestias repudiandae maxime non, amet saepe maiores
                    harum. Doloribus repellendus voluptatum error.
                  </p>
                </div>
              </div>

              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class="translate-y-4 inline-block md:px-6 py-2.5 px-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-36"
                >
                  Choisir
                </button>
              </div>
            </div>
          </div>   
          <div className=" mt-14 ">
            <div className="md:w-80 w-72 shadow-lg rounded-2xl flex-shrink-0 bg-blue-100">
              <img
                class="mb-3 w-20 h-20 rounded-full shadow-lg -translate-y-12 mx-auto"
                src={image_libre}
                alt="Bonniz"
              />
              <h5 className="md:text-lg text-sm text-blue-800 font-bold text-center -mt-3 -translate-y-8 ">
                Abdoulaye Salihou
              </h5>
              <div className="text-yellow-500 md:text-lg text-sm -translate-y-8 md:-translate-y-10 text-center">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon={["far", "star"]} />
              </div>
              <p className="text-center md:-translate-y-10 -translate-y-8 text-xs text-gray-500">
                20 heures données
              </p>
              <div className="space-y-2 md:text-sm text-xs md:-translate-y-8 -translate-y-6 text-blue-700 font-semibold mx-8">
                <div className="flex space-x-2  ">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <p>HEC, 1ère année</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faComments} />
                  <p>Bilingue</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p>Diplomé vérifié</p>
                </div>
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>Paris</p>
                </div>
                <div className="space-y-1">
                  <h3 className="md:text-lg text-sm text-blue-800 font-semibold">
                    Description
                  </h3>
                  <p className="md:text-sm text-xs text-gray-500 text-justify ">
                    Debitis molestias repudiandae maxime non, amet saepe maiores
                    harum. Doloribus repellendus voluptatum error.
                  </p>
                </div>
              </div>

              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class="translate-y-4 inline-block md:px-6 py-2.5 px-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-36"
                >
                  Choisir
                </button>
              </div>
            </div>
          </div>   
          
        </div>
    );
};

export default TeacherCard;