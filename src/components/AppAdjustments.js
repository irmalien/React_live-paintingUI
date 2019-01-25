
import React from 'react';
import $ from 'jquery';
import 'jquery-ui';
import AdjSlider from './AdjSlider';

class AppAdjustments extends React.Component {
  state={};
  

  render(){
    return (
      <div className="ui left visible vertical inverted sidebar menu" style={{paddingTop: '60px', left: '60px'}}>

        <div className="item">
          <div className="header">Particle</div>
              < AdjSlider 
                label="Longevity"/>
              < AdjSlider 
                label="Max size"/>
              < AdjSlider 
                label="Min size"/>
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

