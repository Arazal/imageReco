import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import FaceRecognition from './components/FaceRecignition/FaceRecognition'
//import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: '1514fbadde1747dd8387e30c820d5eb4'
})


class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)
    console.log(width, height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
  }

onInputChange = (event) => {
  this.setState({input: event.target.value})
}

onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input})
  app.models.predict(
            Clarifai.FACE_DETECT_MODEL,
            this.state.input)
            .then(response =>  this.displayFaceBox(this.calculateFaceLocation(response))
            .catch(err => console.log(err))
  );
  //console.log('click')
}

  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Logo /> */}
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
