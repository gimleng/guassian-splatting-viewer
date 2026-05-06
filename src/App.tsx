import { Application } from "@playcanvas/react";
import "./App.css";
import Scene from "./Scene";

function App() {
  return (
    <>
      <div className="full-bleed">
        <Application className="playcanvas-app" >
          <Scene />
        </Application>
      </div>
    </>
  );
}

export default App;
