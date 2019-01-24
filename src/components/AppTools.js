import './Main.css';
import React from 'react';

class AppTools extends React.Component {
  state={};
  
  render(){
    return (
      <div className="ui left vertical inverted icon sidebar menu visible" 
      style={{zIndex: '202', width: '60px', paddingTop: '70px'}}>
        <a className="item">
          <i className="large paint brush icon"></i>
        </a>
        <a className="item">
          <i className="large image icon"></i>
        </a>
        <a className="item">
          <i className="large eye icon"></i>
        </a>
      </div>
    );
  }
}

export default AppTools;