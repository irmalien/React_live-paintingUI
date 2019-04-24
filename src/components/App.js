import React from 'react';
import AppHeader from './AppHeader';
import AppTools from './AppTools';
import AppAdjustments from './AppAdjustments';
import P5Wrapper from './P5Wrapper';
import Sketch from './Sketch'


// import AppSidebar from './AppSidebar';

const tester = "this is from app"

class App extends React.Component {
  state = { };


  //toggle complete task
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  render(){
    return (
    <div>
    <AppHeader />
    <AppTools />
    <AppAdjustments />
    <P5Wrapper 
      sketch={Sketch}
      tester={tester} 
    />
    </div>
    )
  }
}

export default App;