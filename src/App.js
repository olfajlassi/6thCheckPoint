import React, {Component} from 'react';
import './App.css';
import Box from './components/box';

class App extends Component {
  
  render() {
    return (
      //<BodyBackgroundColor backgroundColor='#FF00FF'>
        <div class="center-screen" > 
            <h1>Crew Members</h1>
            <Box image='./luffy.png' title="Captain" gender="male" desc="Monkey D Luffy"/>
            <Box image='./zoro.png' title="Swordsman" gender="male" desc="Roronoa Zoro"/>
            <Box image='./robin.png' title="Archaeologist" gender="female" desc= "Niko Robin"/>
            <Box image='./chopper.png' title="Doctor" gender="male" desc="Toni Toni Chopper"/>
        </div>
      //</BodyBackgroundColor>
      );  }
}

export default App;
