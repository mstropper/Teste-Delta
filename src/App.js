import './App.css';
import {useState, React} from "react";
import Menu from "./components/Menu";
import MenuMobile from './components/MenuMobile';
import Slider from "./components/Slider";
import Card from './components/Card';

function App() {
  const [isVisible, setisVisible] = useState(true);

  return (
    <div className='background'>
      <Menu menusetIsVisible={setisVisible}/>
      <MenuMobile menuIsVisible={isVisible} menusetIsVisible={setisVisible}/>
      <Slider/>
      <Card/>
    </div>
  );
}

export default App;
