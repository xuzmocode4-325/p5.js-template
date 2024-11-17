// P_1_0_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * changing colors and size by moving the mouse
 *
 * MOUSE
 * position x          : size
 * position y          : color
 *
 * KEYS
 * s                   : save png
 */
'use strict';

const resizeCanvasToParent = () => {
  const canvasParent = document.getElementById('art-div');
  const { width, height } = canvasParent.getBoundingClientRect();
  resizeCanvas(width, height);
}

function setup() {
  const canvasParent = document.getElementById('art-div');
  const { width, height } = canvasParent.getBoundingClientRect();
  const sketchCanvas = createCanvas(width, height);
  sketchCanvas.parent(canvasParent);
  window.addEventListener('resize', resizeCanvasToParent);
  
  noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);

}

function draw() { 
  translate(40, 15);
  drawStar();
  translate(20, 50);
  drawStar();
}


function drawStar() {
  line(0, -10, 0, 10);
  line(-8, -5, 8, 5);
  line(-8, 5, 8, -5);
}





function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
