import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from './components/body/Body';
import Footer from './components/Footer/Footer';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import AboutPage from './components/About/About';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
