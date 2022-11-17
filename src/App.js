import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Posts from "./Posts"



function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/posts" element={<Posts/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
