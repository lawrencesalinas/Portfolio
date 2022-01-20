import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './screens/Home'
import Projects from './screens/Projects'
import ScrollToTop from './components/ScrollToTop';
import About from './screens/About'

function App() {
  return (
<div className = 'app'>
<Header/>
      <Home/>
      <Projects/>
      <About/>
</div>
  )
}

export default App;
