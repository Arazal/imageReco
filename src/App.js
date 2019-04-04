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
      input: ''
    }
  }

onInputChange = (event) => {
  console.log(event.target.value)
}

onButtonSubmit = () => {
  app.models.predict("a403429f2ddf4b49b307e318f00e528b",
                     "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response)
    },
    function(err) {
      // there was an error
    }
  );
  console.log('click')
}

  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Logo /> */}
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
