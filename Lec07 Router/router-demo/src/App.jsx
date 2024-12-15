
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import MenuComp from './Pages/MenuComp';
import User from './Pages/User';

function App() {

  let userID=19;

  return (
    <>
      <Link to={"/"}>Home</Link> | <Link to={"/about"}>About</Link> | <Link to={"/menu/" + userID}>Menu</Link>

      <h1>Router Demo</h1>
      <div className="card">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu/:userId" element={<MenuComp />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </>
  )
}

export default App
