import './App.css';
import Body from './components/body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Topbar from './components/Topbar/Topbar';
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
