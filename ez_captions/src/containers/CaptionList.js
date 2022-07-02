import React from 'react';
import '../App.css';

class CaptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTimestamp: "",
      inputCaption: ""
    }
  }

  handleTimestampInputChange(event) {
    this.setState({
      inputTimestamp: event.target.value
    })
  }

  handleCaptionInputChange(event) {
    this.setState({
      inputCaption: event.target.value
    })
  }

  render() {
    return (
      <div className="CaptionList">
        {this.props.captions.map((element, id) => {
          return (
            <div className="Caption" key={id}>
              <h3>{element.timestamp} - </h3>
              <p>{element.caption}</p>
            </div>
          );
        })
        }
        <div id="CaptionInputs">
          <input placeholder="HH:MM" value={this.state.inputTimestamp} onChange={(event) => this.handleTimestampInputChange(event)} />
          <input placeholder="Caption" value={this.state.inputCaption} onChange={(event) => this.handleCaptionInputChange(event)} />
          <button onClick={() => this.props.addCaption(this.state.inputTimestamp, this.state.inputCaption)}>+ Add Caption</button>
        </div>
        <button onClick={() => this.props.removeCaption()}>- Remove Caption</button>
      </div>
    )
  }
}
  
export default CaptionList;
