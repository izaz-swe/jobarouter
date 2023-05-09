import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import "./index"
function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Jobarouter</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
