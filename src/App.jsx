import "./App.css";
import Time from "./components/time";
import Timer from "./components/inputtime";
import Todo from "./components/todo";
import { useMediaQuery } from "react-responsive";
import Hamburger from "./components/hamburger";

function App() {
  const isSmall = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <div className="relative bg-[url(./assets/background.jpg)] bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-center items-center space-y-4 transition-all duration-500">
        <div className="flex absolute left-0 top-0 m-4 text-xl bg-amber-200 w-max border-2 border-[#442312] rounded-lg px-3 py-1 font-calsans">
          <Time />
        </div>
        <div>
          <Timer />
        </div>
        <div className="flex absolute right-0 top-0 ">
          <div>{isSmall ? <Todo /> : <Hamburger />}</div>
        </div>
      </div>
    </>
  );
}

export default App;
