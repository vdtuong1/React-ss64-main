import { Route, Routes } from "react-router-dom";
import Login from "./components/client/Login";
import Signup from "./components/client/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<Login></Login>}/>
        <Route path="/signup" element={<Signup></Signup>} />
      </Routes>
    </div>
  );
}

export default App;
