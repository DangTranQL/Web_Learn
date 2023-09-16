import React, {useState} from 'react';
import './App.css';
import Body from './components/Body';
import Eyes from './components/Eyes';
import Hair from './components/Hair';
import Avatar from './components/Avatar';
import Clothes1 from './components/Clothes1';
import Clothes2 from './components/Clothes2';
import Clothes3 from './components/Clothes3';
import Mouth from './components/Mouth';
import Nose from './components/Nose';
import Glasses from './components/Glasses';

function App() {
  const [body, setBody] = useState(`character/body/${Math.floor(Math.random() * 17) + 1}.png`)
  const [eyes, setEyes] = useState(`character/eyes/${Math.floor(Math.random() * 24) + 1}.png`)
  const [hair, setHair] = useState(`character/hair/${Math.floor(Math.random() * 73) + 1}.png`)
  const [clothes1, setClothes1] = useState(`character/clothes/layer_1/${Math.floor(Math.random() * 5) + 1}.png`)
  const [clothes2, setClothes2] = useState(`character/clothes/layer_2/${Math.floor(Math.random() * 5) + 1}.png`)
  const [clothes3, setClothes3] = useState(`character/clothes/layer_3/${Math.floor(Math.random() * 9) + 1}.png`)
  const [mouth, setMouth] = useState(`character/mouths/${Math.floor(Math.random() * 24) + 1}.png`)
  const [nose, setNose] = useState(`character/noses/${Math.floor(Math.random() * 1) + 1}.png`)
  const [glasses, setGlasses] = useState(`character/accessories/glasses/${Math.floor(Math.random() * 17) + 1}.png`)

  // useEffect(() => {setEyes(`character/eyes/${Math.floor(Math.random() * 24) + 1}.png`)}, []);

  return (
    <div class="App">
      <div class='avatarApp'>
        <Avatar srcBody={body} srcGlasses={glasses} srcClothes1={clothes1} srcClothes2={clothes2} srcClothes3={clothes3} srcEyes={eyes} srcHair={hair} srcMouth={mouth} srcNose={nose}/>
      </div>
      <div class="partList">
        <Body handleBody={setBody}/>
        <Clothes1 handleClothes1={setClothes1}/>
        <Clothes2 handleClothes2={setClothes2}/>
        <Clothes3 handleClothes3={setClothes3}/>
        <Mouth handleMouth={setMouth}/>
        <Nose handleNose={setNose}/>
        <Hair handleHair={setHair}/>
        <Glasses handleGlasses={setGlasses}/>
        <Eyes handleEyes={setEyes}/>
      </div>
    </div>
  );
}

export default App;
