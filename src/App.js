import "./App.css";
import StudentInput from "./StudentInput";

function App() {
  return (
    <div
      className="relative"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${require("./image/bg.png")})`,
      }}
    >
      <h3 className="text-6xl font-bold text-blue-700   p-5"> Book - Grade</h3>
      <StudentInput />

      {/* <div className="absolute inset-x-0">
        <Modal />
      </div> */}

      {/* <div class="relative h-32 w-32 ...">
        <div class="absolute h-14 w-14 -left-4 -top-4 ...">
          <Modal />
        </div>
      </div> */}
    </div>
  );
}

export default App;
