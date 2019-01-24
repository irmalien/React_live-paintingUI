
import React from 'react';

class AppSiderbar extends React.Component {
  state={};
  
  render(){
    return (
      <div className="ui left visible vertical inverted sidebar labeled icon menu">
        <a className="item">
          <i className="home icon"></i>
          Home
        </a>
        <a className="item">
          <i className="block layout icon"></i>
          Topics
        </a>
        <a className="item">
          <i className="smile icon"></i>
          Friends
        </a>
      </div>
    );
  }
}

export default AppSiderbar;

