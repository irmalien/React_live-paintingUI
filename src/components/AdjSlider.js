import './AdjSlider.css';
import React from 'react';


class AdjSlider extends React.Component {
  constructor(props){
    super(props);
    this.state={
      label: props.label,
      labelValue: 0,
      valueMin: 0,
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
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <label>{this.state.label}</label>
          <label style={{opacity: this.state.labelValue}}>{this.state.value}</label> 
        </div>
        
        <input type="range" 
        min={this.state.valueMin} 
        max={this.state.valueMax} 
        value={this.state.value}
        onMouseDown={() => this.setState( {labelValue: 100} )}
        onChange={(e) => this.setState( {value: e.target.value} )}
        onMouseUp={() => this.setState( {labelValue: 0} )}
        // onmousedown="myFunction()
        className="slider" 
        id="myRange">
        </input>
      </div>
    );
  }
}

export default AdjSlider;