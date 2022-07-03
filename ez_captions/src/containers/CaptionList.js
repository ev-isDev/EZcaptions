import React from 'react';
import '../App.css';

class CaptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStartTimestamp: "",
      inputEndTimestamp: "",
      inputCaption: ""
    }
  }

  handleStartTimestampInputChange(event) {
    this.setState({
      inputStartTimestamp: event.target.value,
    })
  }

  handleEndTimestampInputChange(event) {
    this.setState({
      inputEndTimestamp: event.target.value,
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
              <h3>{element.startTimeStamp} -> </h3>
              <h3>{element.endTimeStamp} : &nbsp; </h3>
              <p>{element.caption}</p>
            </div>
          );
        })
        }
        <div id="CaptionInputs">
          <input placeholder="HH:MM" value={this.state.inputStartTimestamp} onChange={(event) => this.handleStartTimestampInputChange(event)} />
          <input placeholder="HH:MM" value={this.state.inputEndTimestamp} onChange={(event) => this.handleEndTimestampInputChange(event)} />
          <input placeholder="Caption" value={this.state.inputCaption} onChange={(event) => this.handleCaptionInputChange(event)} />
          <button className='btn'onClick={() => this.props.addCaption(this.state.inputStartTimestamp, this.state.inputEndTimestamp, this.state.inputCaption)}>+ Add Caption</button>
        </div>
        <button className='btn'onClick={() => this.props.removeCaption()}>- Remove Caption</button>
      </div>
    )
  }
}
  
export default CaptionList;
