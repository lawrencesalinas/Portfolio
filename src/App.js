import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './screens/Home'
import Projects from './screens/Projects'

function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path= '/projects'  element={<Projects/>}/>
  <Route path= '/'  element={<Home/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App;
