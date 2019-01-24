import './AdjSlider.css';
import React from 'react';


class AdjSlider extends React.Component {
  constructor(props){
    super(props);
    this.state={
      label: props.label,
      valueMin: 1,
      valueMax: 100,
      value: 50
    }
  }
 
  handleValueChange(e, {value}){
    this.setState({
      value: value
    })
  }
  
  componentDidUpdate()
  {console.log(this.state.value)}

  render(){
    return (
      <div className="slidecontainer">
        <label>{this.state.label}</label>
        <input type="range" 
        min={this.state.valueMin} 
        max={this.state.valueMax} 
        value={this.state.value}
        onChange={(e) => this.setState( {value: e.target.value} )} 
        className="slider" 
        id="myRange">
        </input>
      </div>
    );
  }
}

export default AdjSlider;