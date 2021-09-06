import './App.css';
import Navbarcomp from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flightcontent from './components/Flightcontent';



function App() {
  return (

    <div className="App">
      <Navbarcomp/>
      <div className="cards">
      <Flightcontent/>
      </div>

    </div>
  );
}

export default App;
