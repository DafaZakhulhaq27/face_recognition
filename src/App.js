import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'
import Rank from './components/rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '4fbb533d2b9c4f6ba5c13bdc22bc0a3d'
 });
 
  const particleparams = {
    polygon: {
      enable: true,
      type: 'inside',
      move: {
          radius: 10
      },
      url: 'path/to/svg.svg'
  }
}

class App extends Component {
    constructor(){
      super();
      this.state = {
          input: ''
      }
    }
    onInputChange = (event) =>{
      console.log(event.target.value) ;
    }
    onButtonDetect = () => {
      console.log('slap') ;
      app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
        function(response) {
          console.log(response) ;  
        },
        function(err) {
          // there was an error
        }
      );      
    }
    render(){
      return (
        <div className="App">
        <Particles params={{particleparams}} className='particles' />    
        <Navigation />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonDetect={this.onButtonDetect}/>
        {/* <FaceRecognition /> */}
      </div>
  
      )
    }
}

export default App;
