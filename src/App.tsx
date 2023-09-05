import "./App.css";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="container-main">
      <Outlet />
    </div>
  );
}

export default App;
