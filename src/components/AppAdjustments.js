
import React from 'react';
import AdjField from './AdjField';
import AdjSlider from './AdjSlider';

class AppAdjustments extends React.Component {
  state={};
  
  render(){
    return (
      <div className="ui left visible vertical inverted sidebar menu" style={{paddingTop: '70px', left: '60px'}}>

        <div className="item">
          <div className="header">Particle</div>
              < AdjSlider 
                label="Longevity"/>
              < AdjSlider 
                label="Max size"/>
              < AdjSlider 
                label="Max size"/>
        </div>

        <div className="item">
          <div className="header">Dynamics</div>
              < AdjSlider 
                label="Vertical"/>
              < AdjSlider 
                label="Horisontal"/>
              < AdjSlider 
                label="Tremble"/>
              < AdjSlider 
                label="Speed"/>
              < AdjSlider 
                label="Random X"/>
              < AdjSlider 
                label="Random Y"/>
              < AdjSlider 
                label="Random Z"/>  
        </div>
      </div>
    );
  }
}

export default AppAdjustments;

