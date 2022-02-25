import './App.css';

import Body from './components/body/Body';
import Footer from './components/Footer/Footer';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';

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
