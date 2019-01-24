import React from 'react';
import AppHeader from './AppHeader';
import AppTools from './AppTools';
import AppAdjustments from './AppAdjustments';
// import AppSidebar from './AppSidebar';


class App extends React.Component {
  state = { };

  render(){
    return (
    <div>
    <AppHeader />
    <AppTools />
    <AppAdjustments />
    </div>
    )
  }
}

export default App;