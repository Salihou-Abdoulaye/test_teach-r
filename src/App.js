import logo from "../src/img/logo.png";
import circle_1 from "../src/img/number-circle-one-thin-svgrepo-com.svg";
import circle_2 from "../src/img/number-circle-two-thin-svgrepo-com.svg";
import circle_3 from "../src/img/number-circle-three-thin-svgrepo-com.svg";

function App() {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 h-screen block">
        <div className="mt-6 mx-6">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="mx-8 mt-10">...</div>
        <div className="mt-2 mx-6 space-y-3 ">
          <div className="flex space-x-2">
            <img src={circle_1} alt="logo" className="w-6 " />
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
        <div>
          <h1>En quelle matière avez-vous besoin d'aide ?</h1>
          <input type="text" placeholder="SVT, piano, anglais, math..." />
          <h1>Les teachers d'Anglais qui pourraient vous comprendre</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
