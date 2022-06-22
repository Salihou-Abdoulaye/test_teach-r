import logo from "../src/img/logo.png";
import circle_1 from "../src/img/number-circle-one-thin-svgrepo-com.svg";
import circle_2 from "../src/img/number-circle-two-thin-svgrepo-com.svg";
import circle_3 from "../src/img/number-circle-three-thin-svgrepo-com.svg";

function App() {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 h-screen block text-2xl">
        <div className="mt-6 mx-6">
          <img src={logo} alt="logo" className="w-32 " />
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
      <div className="w-full h-screen">
        <div className="space-y-4">
          <div className="text-2xl text-blue-800 font-semibold mt-6 w-2/4 mx-auto">
            <p className="ml-14">En quelle matière avez-vous besoin d'aide ?</p>
          </div>
          <div class="flex justify-center">    
            <div class="pt-2 relative mx-auto text-gray-600 w-1/2" >
              <input class=" bg-gray-200 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
              type="search" name="search" placeholder="Search"/>
              <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.966 56.966"
                  width="512px" height="512px">
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-2xl text-blue-800 font-semibold mt-3 w-2/4 mx-auto">
            <p className="ml-2">Les teachers d'Anglais qui pourraient vous comprendre</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
