import Header from "./components/Header/Header.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/views/Home/Home.jsx";
import About from "./components/views/About/About.jsx";
import Projects from "./components/views/Projects/Projects.jsx";
import {useRef} from "react";
import Footer from "./components/Footer/Footer.jsx";
function App() {
    const contactsRef = useRef(null)
  return (
    <>
      <Header contactsRef={contactsRef} />
      <main className={'main'}>
        <Routes>
                <Route path={"/"} element={<Home contactsRef={contactsRef} />} ></Route>
                <Route path={"/about"} element={<About />} ></Route>
                <Route path={"/projects"} element={<Projects />} ></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}
export default App
