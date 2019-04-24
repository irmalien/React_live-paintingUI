import './P5Wrapper.css'
import React from 'react';
import p5 from 'p5';

export default class P5Wrapper extends React.Component {

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
    window.addEventListener('resize', this.fitCanvasToScreen, false);
  }

  componentDidUpdate(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  fitCanvasToScreen(param) {
    let c = document.getElementsByTagName('canvas');
    let px = /px/;

    for(let i =0; i<c.length; i++){
      let p1 = window.innerWidth/window.innerHeight;
      let p2 = c[i].style.width.replace(px, '')/c[i].style.height.replace(px, '');
      let w1w2 = window.innerWidth/c[i].style.width.replace(px, '')
      let h1h2 = window.innerHeight/c[i].style.height.replace(px, '')
  
      if(p1 > p2){
        let w = c[i].style.width.replace(px, '')*h1h2
        let h = c[i].style.height.replace(px, '')*h1h2
        c[i].style.width = `${w}px`;
        c[i].style.height = `${h}px`;
      }
      else{
        let w = c[i].style.width.replace(px, '')*w1w2
        let h = c[i].style.height.replace(px, '')*w1w2
        c[i].style.width = `${w}px`;
        c[i].style.height = `${h}px`;
      }
    }

  }

  render() {

    return <div className="p5wrapper" ref={wrapper => this.wrapper = wrapper}></div>;
  }
}