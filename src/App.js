import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation';
import Logo from './component/Logo';
import 'tachyons';
import ImageLinkForm from './component/ImageLinkForm';
import Particles from 'react-particles-js';
import { useState } from 'react';

const particalOptions = {
  particles: {
    line_linked:{
      shadow: {
        enable: true,
        color: "red",
        blur: 10
      }
    }
  }
}

function App() {

  const [inputData, setInputData] = useState('');

  function inputChange(ev){
    console.log(ev.target.value)
  }

  function onSubmit(){
    console.log("click");
  }

  return (
    <div className="App">
       <Particles 
       params={particalOptions} className="partical"
       />
      <Navigation />
      <Logo />
      <ImageLinkForm inputChange={inputChange} onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
