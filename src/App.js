import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home";

import About from "./screens/About";
import Skills from "./screens/Skills";
import Contact from "./screens/Contact";
import Footer from './components/Footer'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Projects2 from "./screens/Projects2";

function App() {
  return (
    <div className="app">
      <Button>hello</Button>
      <Header />
      <Home />
      <Projects2 />
     
     
 
    </div>
  );
}

export default App;
