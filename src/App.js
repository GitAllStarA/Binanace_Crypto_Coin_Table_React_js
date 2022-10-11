import logo from './logo.svg';
import './App.css';
import BinanceApi from './Component/BinanceApi';
import backgroundImage from './Component/background.jpg';
function App() {
 
  return (

     <div id="rootDiv" >
      {/* style={{backgroundImage: `url(${backgroundImage})`}} */}
      <BinanceApi/>
    </div>
  );
}

export default App;
