
import React from 'react';

class AdjField extends React.Component {
  state={};
  
  render(){
    return (
      <div className="ui mini inverted form" style={{ marginTop: '5px', marginBottom: '5px', }}>
        <div className="inline fields">
          <label>Phone Number</label>
          <div className="field">
            <input type="text" placeholder="(xxx)"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default AdjField;