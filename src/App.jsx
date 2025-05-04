import "./App.css";
import Clock from "./components/clock";
import Timer from "./components/inputtime";

function App() {
  return (
    <>
      <div className="bg-[url(./assets/background.jpg)] bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-center items-center space-y-4">
        <Timer />
      </div>
    </>
  );
}

export default App;
