let polySynth;
let reverb;
let drums;

let distortion;
let slider;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let paper;
function preload() {
  soundFormats('mp3');
  drums = loadSound('keycard.mp3');

  paper = loadImage('paper.JPG');
}
function setup() {
   createCanvas(400, 400);
   
  //GMaj
  button1 = createButton('G Major');
  button1.position(20, 20);
  button1.mousePressed(playSynth1);
  //CMaj
  button2 = createButton('C Major');
  button2.position(165, 20);
  button2.mousePressed(playSynth2);
  //FMaj
  button3 = createButton('F Major');
  button3.position(300, 20);
  button3.mousePressed(playSynth3);
  //Dmin
  button4 = createButton('D Minor');
  button4.position(20, 80);
  button4.mousePressed(playSynth4);
  polySynth = new p5.PolySynth();
  //Emin
  button5 = createButton('E Minor');
  button5.position(165, 80);
  button5.mousePressed(playSynth5);
  //Amin
  button6 = createButton('A Minor');
  button6.position(300, 80);
  button6.mousePressed(playSynth6);
  //playDrums
  button7 = createButton('Play Drums');
  button7.position(152,250);
  button7.mousePressed(playDrums);
  polySynth = new p5.PolySynth();
  //synth reverb
  reverb = new p5.Reverb();
  polySynth.disconnect();
  polySynth.connect(reverb);
  reverb.amp(6);
  //drums
  DIST = createButton('DIST');
  DIST.position(170,200);
  DIST.mousePressed(distort);
  distortion = new p5.Distortion(0.25,'2x')
 
  

  slider = createSlider(0.5, 4, 1, 0.5)
  slider.position(130,300);
}

function draw() {
  background(paper);
  text('speed', 175, 295);
  fill(255);
  let s = slider.value();
  drums.rate(s);

}
function playSynth1() {
  userStartAudio();
  let dur = 1.5;
  let time = 0;
  let vel = 0.1;
  polySynth.play('G3', vel, 0, dur);
  polySynth.play('C4', vel, time += 1/3, dur);
  polySynth.play('B3', vel, time += 1/3, dur);
}
function playSynth2() {
  userStartAudio();
  let dur = 1.5;
  let time = 0;
  let vel = 0.1;
  polySynth.play('C4', vel, 0, dur);
  polySynth.play('G3', vel, time += 1/3, dur);
  polySynth.play('E4', vel, time += 1/3, dur);
}
function playSynth3() {
  userStartAudio();
  let dur = 1.5;
  let time = 0;
  let vel = 0.1;
  polySynth.play('C4', vel, 0, dur);
  polySynth.play('F3', vel, time += 1/3, dur);
  polySynth.play('A4', vel, time += 1/3, dur);
}
function playSynth4() {
  userStartAudio();
  let dur = 1.5;
  let time = 0;
  let vel = 0.1;
  polySynth.play('D4', vel, 0, dur);
  polySynth.play('F3', vel, time += 1/3, dur);
  polySynth.play('A4', vel, time += 1/3, dur);
}
function playSynth5() {
  userStartAudio();
  let dur = 1.5;
  let time = 0;
  let vel = 0.1;
  polySynth.play('E4', vel, 0, dur);
  polySynth.play('G3', vel, time += 1/3, dur);
  polySynth.play('B4', vel, time += 1/3, dur);
}
function playSynth6() {
  userStartAudio();
  let dur = 1.5;
  let time = 0;
  let vel = 0.1;
  polySynth.play('A4', vel, 0, dur);
  polySynth.play('C3', vel, time += 1/3, dur);
  polySynth.play('E4', vel, time += 1/3, dur);
}
function playDrums(){
  drums.play();
  drums.loop();
}
function distort(){
  reverb.connect(distortion);
  reverb.amp(0.6);
  // polySynth.setVolume(0.2);
  drums.connect(distortion);
  drums.setVolume(0.1);
}

  