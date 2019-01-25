import './Main.css';
import React from 'react';

class AppHeader extends React.Component {
  state={ term: ''};
  
  render(){
    return (
    <div className="ui top sidebar ui segment overlay visible" 
    style={{zIndex: '302', paddingTop: '2px', paddingBottom: '0', backgroundColor: '#333333'}}>
      <div className="ui inverted secondary menu">
        <div className="item">
          <h3 className="Third header">Live painting</h3>
        </div>

        <div className="right item">
          <div className="ml-20">
            <i className="zoom-out grey large icon"></i>
          </div>

          <div className="ml-20">
            <i className="zoom-in grey large icon"></i>
          </div>

          <div className="ml-20">
            <i className="pause circle grey big icon"></i>
          </div>

          <div className="ml-20">
            <button className="ui tiny grey button" >
              Discard
            </button>
          </div>

          <div className="ml-20">
            <button className="ui tiny positive button">
              Save
            </button>
          </div>

        </div>

      </div>
    </div>
    );
  }
}

export default AppHeader;
