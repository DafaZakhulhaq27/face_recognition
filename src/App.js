import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'
import FaceRecognition from './components/facerecognition/FaceRecognition'
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
          input: '',
          imageUrl : ''
      }
    }
    onInputChange = (event) =>{
      // console.log(event.target.value) ;
      this.setState({input : event.target.value})
    }
    onButtonDetect = () => {
      this.setState({imageUrl : this.state.input})
      console.log('slap') ;
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box) ;  
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
  
      )
    }
}

export default App;
