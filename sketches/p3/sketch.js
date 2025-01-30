var segmentCount = 360;
var radius;

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
    radius = (min(width, height) / 2) - 50;
    window.addEventListener('resize', resizeCanvasToParent);
  
    noStroke()
    noCursor();
    colorMode(HSB, 360, width, height);
    resizeCanvas(width, height);
  }


function draw() {
   
    background(0, 0, 0);
    var angleStep = 360 / segmentCount; 
    beginShape(TRIANGLE_FAN);

    vertex(width / 2, height/ 2); 
    for (var angle = 0; angle <= 360; angle += angleStep) {
        var vx = width / 2 + cos(radians(angle)) * radius; 
        var vy = height / 2 + sin(radians(angle)) * radius; 
        vertex(vx, vy);
        fill(angle, mouseX, mouseY);
    }

    endShape();
}

function keyPressed() {
    switch(key) {
        case '1':
            segmentCount = 360
            console.log("Segments", segmentCount)
            break;
        case '2':
            segmentCount = 90
            console.log("Segments", segmentCount)
            break;
        case '3':
            segmentCount = 60
            console.log("Segments", segmentCount);
            break;
        case '4':
            segmentCount = 24
            console.log("Segments", segmentCount)
            break;
        case '5':
            segmentCount = 12
            console.log("Segments", segmentCount)
            break;
        case '6':
            segmentCount = 6
            console.log("Segments", segmentCount)
            break;
            
    }
}