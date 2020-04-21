import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'
import FaceRecognition from './components/facerecognition/FaceRecognition'
import Rank from './components/rank/Rank'
import SignIn from './components/signin/SignIn'
import Register from './components/register/Register'
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
          imageUrl : '',
          box:{} ,
          route:'SignIn',
          isSignin: false
      }
    }
    // componentDidMount() {
    //     fetch('http://localhost:3000')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }
    calculateFaceLocation = (data) => {
      const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box ;
      const image = document.getElementById('input_image') ;
      const width = Number(image.width) ;
      const height = Number(image.height) ;
      return {
        leftcol: clarifaiface.left_col * width ,
        toprow: clarifaiface.top_row * height ,
        rightcol: width - (clarifaiface.right_col * width) ,
        bottomrow: height - (clarifaiface.bottom_row * height) 
      }
    }

    displayFaceBox = (box) => {
      this.setState({box : box }) ; 
      console.log(this.state.box) ;

    }

    onInputChange = (event) =>{
      // console.log(event.target.value) ;
      this.setState({input : event.target.value}) 
    }
    onButtonDetect = () => {
      this.setState({imageUrl : this.state.input}) ;
      app.models.predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
        .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))          
        .catch(err => alert(err));      
    }
    onRouteChange = (route) => {
      if(route === 'home'){
        this.setState({isSignin : true}) ;
      }else{
        this.setState({isSignin : false}) ;
      }
      this.setState({route : route}) ;
    }
    render(){
      const {isSignin, imageUrl, box, route} = this.state ;
      return (
        <div className="App">
        <Particles params={{particleparams}} className='particles' />
        <Navigation onRouteChange={this.onRouteChange} isSignin={isSignin} />
        { route === 'home' ?
          <div>
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonDetect={this.onButtonDetect}/>
          <FaceRecognition imageUrl={imageUrl} box={box} />
        </div>
          :( route === 'SignIn' ?
            <SignIn onRouteChange={this.onRouteChange} />
            :<Register onRouteChange={this.onRouteChange} />
          )
              
        }
      </div>
  
      )
    }
}

export default App;
