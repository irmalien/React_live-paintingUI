export default function Sketch (p) {
  let canvas;
  let rotation = 0;
  let tester;

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(100);
    // canvas = document.getElementsByTagName('canvas');
    // canvas.setAttribute('id', "My name");
    // p.setAttribute("id", "this-is-canvas-Name");
  };

  // var ctx = createCanvas("someCanvasName");

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
    if (props.tester){
      tester = props.tester
    }

  };

  p.draw = function () {
    console.log(tester)
    p.noStroke();
    // p.push();
    // p.rotateY(rotation);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
    // p.pop();
    // console.log(p.mouseX, p.mouseY)
  };
};


// allows me global access to canvas and it’s width and height properties
var w, width, h, height;
var canvas;

function createCanvas(canvas_name){
 canvas = document.createElement("canvas");
 var body = document.querySelector("body");
 canvas.setAttribute("id", canvas_name);
 canvas.style.position = "absolute";
 canvas.style.left = "0px";
 canvas.style.top = "0px";
 body.appendChild(canvas);
 var ctx = canvas.getContext("2d");
 resize();
 window.addEventListener("resize", resize, false);
 return ctx;
}

// this enables me to have many canvases 
// positioned on top of each other at 100% width and height of page
function resize(){
  var c = document.getElementsByTagName("canvas");
  width = w = window.innerWidth;
  height = h = window.innerHeight;
  for(var i = 0; i < c.length; i++) {
    c[i].width = width;
    c[i].height = height;
  }
  console.log("resize: " + w +":" + h);
}

function createHiddenCanvas(canvas_name){
  var ctx = createCanvas(canvas_name)
  canvas.style.left = -w+"px";
  return ctx;
 }