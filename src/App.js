import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Header";
import Home from "./Pages/Home";
import Yaseen from "./Components/Spara";
import Counter from "./Components/Counter";
import Chapetrs from "./Pages/Chapetrs";
import Other from "./Pages/Other";
import Duaa from "./Components/duaa";
import Names from "./Pages/Names";


function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/quran/:id" element={<Yaseen/>} />
      <Route path="/counter" element={<Counter/>} />
      <Route path="/chapters" element={<Chapetrs/>} />
      <Route path="/others" element={<Other/>} />
      <Route path="/test" element={<Duaa/>} />
      <Route path="/names" element={<Names/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
