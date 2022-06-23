import logo from "../src/img/logo (1).png";
import circle_1 from "../src/img/number-circle-one-thin-svgrepo-com.svg";
import circle_2 from "../src/img/number-circle-two-thin-svgrepo-com.svg";
import circle_3 from "../src/img/number-circle-three-thin-svgrepo-com.svg";
import image from "./img/sali.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck, faComment, faComments, faGraduationCap, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(far, faStar);

function App() {
  return (
    <div className="flex">
      <div className="w-2/5 bg-gray-200 h-screen block text-2xl">
        <div className="mt-6 mx-10 ">
          <img src={logo} alt="logo" className="w-44 text-blue-600 " />
        </div>
        <div className="mx-12 mt-10 text-gray-400">...</div>
        <div className="mt-4 mx-6 space-y-4 text-blue-400">
          <div className="flex space-x-2 ">
            <img src={circle_1} alt="logo" className="w-6  blue-400" />
            <p>Votre demande</p>
          </div>
          <div className="flex space-x-2">
            <img src={circle_2} alt="logo" className="w-6 " />
            <p>Nos propoditions</p>
          </div>
          <div className="flex space-x-2">
            <img src={circle_3} alt="logo" className="w-6 " />
            <p>Paiement</p>
          </div>
        </div>
      </div>

      <div className="w-3/4 h-screen">
        <div className="space-y-3 text-center">
          <div className="text-xl text-blue-800 font-semibold mt-2">
            <p>En quelle matière avez-vous besoin d'aide ?</p>
          </div>
          <div class="flex justify-center">
            <div class="pt-2 relative mx-auto text-gray-600 w-2/6">
              <input
                class=" bg-gray-200 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
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
          <div className="text-xl text-blue-800 font-semibold">
            <p className="ml-2">
              Les teachers d'Anglais qui pourraient vous comprendre
            </p>
          </div>
        </div>
        
        <div className="">
          <div className="flex mt-14">
            <div className="w-96 ml-6 shadow-lg rounded-2xl bg-blue-100">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg -translate-y-12 mx-auto"
                src={image}
                alt="Bonniz"
              />
              <h5 className="text-xl text-blue-800 font-bold text-center  -translate-y-10 ">
                Marie Dardell
              </h5>
              <div className="text-yellow-500 text-xl -translate-y-10 text-center">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon={["far", "star"]} />
              </div>
              <p className="text-center -translate-y-10 text-sm text-gray-500">
                20 heures données
              </p>
              <div className="space-y-2 text-lg -translate-y-6 text-blue-700 font-semibold mx-8">
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
                <div className="space-y-2">
                  <h3 className="text-lg text-blue-800">Description</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Debitis molestias repudiandae maxime non, amet saepe maiores
                    harum. Doloribus repellendus voluptatum error rem, qui culpa
                    accusantium.
                  </p>
                </div>
              </div>

              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class="translate-y-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-44"
                >
                Choisir
                </button>
              </div>
            </div>
            <div className="w-96 ml-6 shadow-lg rounded-2xl  bg-blue-100">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg -translate-y-12 mx-auto"
                src={image}
                alt="Bonniz"
              />
              <h5 className="text-xl text-blue-800 font-bold text-center  -translate-y-10 ">
                Marie Dardell
              </h5>
              <div className="text-yellow-500 text-xl -translate-y-10 text-center">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon={["far", "star"]} />
              </div>
              <p className="text-center -translate-y-10 text-sm text-gray-500">
                20 heures données
              </p>
              <div className="space-y-2 text-lg -translate-y-6 text-blue-700 font-semibold mx-8">
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
                <div className="space-y-2">
                  <h3 className="text-lg text-blue-800">Description</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Debitis molestias repudiandae maxime non, amet saepe maiores
                    harum. Doloribus repellendus voluptatum error rem, qui culpa
                    accusantium.
                  </p>
                </div>
              </div>

              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class="translate-y-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-44"
                >
                Choisir
                </button>
              </div>
            </div>
            <div className="w-96 ml-6 shadow-lg rounded-2xl  bg-blue-100">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg -translate-y-12 mx-auto"
                src={image}
                alt="Bonniz"
              />
              <h5 className="text-xl text-blue-800 font-bold text-center  -translate-y-10 ">
                Marie Dardell
              </h5>
              <div className="text-yellow-500 text-xl -translate-y-10 text-center">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon={["far", "star"]} />
              </div>
              <p className="text-center -translate-y-10 text-sm text-gray-500">
                20 heures données
              </p>
              <div className="space-y-2 text-lg -translate-y-6 text-blue-700 font-semibold mx-8">
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
                <div className="space-y-2">
                  <h3 className="text-lg text-blue-800">Description</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Debitis molestias repudiandae maxime non, amet saepe maiores
                    harum. Doloribus repellendus voluptatum error rem, qui culpa
                    accusantium.
                  </p>
                </div>
              </div>

              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class="translate-y-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-44"
                >
                Choisir
                </button>
              </div>
            </div>
        </div>
        </div>

        <div className="flex mt-8 justify-around w-1/2 mx-auto">
              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class=" translate-y-4 px-6 py-2.5 text-gray-700 font-medium leading-tight uppercase hover:text-blue-700  focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out w-44"
                >
                Precédent
                </button>
              </div>
              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class="translate-y-4 inline-block px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-medium leading-tight uppercase rounded-full hover:text-blue-700  focus:outline-none focus:ring-0 active:text-blue-800 transition duration-150 ease-in-out w-44"
                >
                Choisir
                </button>
              </div>
        </div>

      </div>
    </div>
  );
}

export default App;
