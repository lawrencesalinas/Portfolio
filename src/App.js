import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Skills from "./screens/Skills";
import Contact from "./screens/Contact";
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Footer/>
     
 
    </div>
  );
}

export default App;
