import './App.css';
import Header from './containers/Header';
import React from 'react';
import CaptionList from './containers/CaptionList';
import Captions from './Captions.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      captionList: Captions.captions
    }
  }

  addCaption = (startTimeStamp, endTimeStamp, caption) => {
    const newCaption = {
      "startTimeStamp": startTimeStamp,
      "endTimeStamp" : endTimeStamp,
      "caption": caption,
    }
  
    const currentCaptions = this.state.captionList;
    currentCaptions.push(newCaption);
    
    this.setState({
      captionList: currentCaptions
    });
  }

  removeCaption = (caption) => {
    // js remove last array item method
    // this.setState the new caption list
    console.log("remove the caption")
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CaptionList captions={this.state.captionList} addCaption={this.addCaption} removeCaption={this.removeCaption} />
      </div>
    );
  }
}

export default App;
