import { Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Registeration";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
     
      </Routes>
    </>
  );
}

export default App;
