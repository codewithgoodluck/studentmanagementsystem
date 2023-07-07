import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Layout from "./component/Layout";
import Teacher from "./pages/Clases";
import Account from "./pages/Dashboard";
import Dashboard from "./pages/Dashboard";
import Clases from "./pages/Clases";
import LoginPage from "./pages/LoginPage";
import Singup from "./component/Singup";
import Footer from "./component/Footer";


function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/lay" element={<Layout></Layout>}></Route> */}
        {/* <Route path="" element={<Clases />}></Route> */}
        <Route path="/dashbaord" element={<Dashboard />}></Route>
        <Route path="/loginpage" element={< LoginPage />}></Route>
        <Route path="/" element={<Singup />}></Route>
      </Routes>
    
    </>
  );
}

export default App;
