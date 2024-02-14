let easel;
let tex;
let frame;
let artwork;
let cam;
var a = 0;
let angle = 0;
let speed = 0.003;
let angleV = 0;
let angleA = 0;

var easycam,
    state = {
     distance: 1000,
      center  : [5, 3, -13],
      rotation: [0.3, -0.4, -0.1, 0.85]

    };


    
function preload() {
  easel = loadModel('easel-og-corrected3.obj', true);
tex = loadImage('assets/wood.jpg');
frame = loadModel('oldfixed.obj', true);
artwork = loadImage('4.jpg');
}



function setup() {
  
  // A p5 method
  // Sets the pixel scaling for high pixel density displays
	// By default pixel density is set to match display density, call pixelDensity(1) to turn this off. 
	// Calling pixelDensity() with no arguments returns the current pixel density of the sketch.
  pixelDensity(1);
	
	// specify the third parameter in createCanvas() as WEBGL
  createCanvas(windowWidth, windowHeight, WEBGL);
  describe('Easel with frame and artwork.');
  angleMode(RADIANS);
    setAttributes('antialias', true);

  easycam = new Dw.EasyCam(this._renderer, {distance : 600}); 

easycam.setDistanceMin(30);
easycam.setDistanceMax(600);
easycam.zoom(1000);
easycam.setRotationScale(0.0005);
  easycam.setPanScale(0.00005);

  document.oncontextmenu =()=> false;

     document.documentElement.addEventListener('mouseup', function(e){
        easycam.cam.mouse.ismousedown=false
      });
  
     angle = PI / 6;

}

function windowResized() {
	// Resizes the canvas to given width and height
	// The canvas will be cleared and draw will be called immediately,
	// allowing the sketch to re-render itself in the resized canvas.
  resizeCanvas(windowWidth, windowHeight);
	
	// parameter: viewport the Array<int> new viewport-def, as [x,y,w,h]
  easycam.setViewport([0,0,windowWidth, windowHeight]);
}

function draw() {
  background(0); 
  clear();
  //ambientLight(255, 255, 255, 10);
  //directionalLight(250, 250, 250, 09, 0, 100);
 //directionalLight(250, 250, 250, 0, 0, 0);
//pointLight(245, 245, 245, -300, 100, 400);
  //pointLight(240, 240, 240, 45, -80, 80);
   pointLight(50, 50, 50, 0, 0, 250);
 // pointLight(240, 240, 240, -45, -80, 80);
  //  directionalLight(240, 240, 240, 0, 50, -80);


 lights();
 //directionalLight(255, 255, 255, 0, 0, -1300)
  
  
    rotateY(angle);

   
fov = PI / 6;
  eyeZ = ((height/2) / tan(PI/6));
  perspective(fov, width/height, eyeZ/1000, eyeZ*10);


  push();
  tex.resize(100, 100);
  translate(width / 2, height / 2);
   rotate(180);
   imageMode(CENTER);
  pop();

  push();
  texture(artwork);
  translate(0, 0, 14.7 );
  rotateX(6.5);
  noStroke();
  plane(90, 63);
  pop();
  
  push();
translate(0, -1.3, 14 );
noStroke();
  scale(0.67);
  model(frame);
  pop();
  
    //Draw obj with UV texture
  push();
  texture(tex);
   textureMode(NORMAL);
translate(0, 0, 0);
noStroke();
  //scale(0.67);
  model(easel);
  pop();
  
  translate(width / 2, height / 2);
  //rotateY (angle);
  //rect(150, 0, 50, 50);
	//line(0, 0, radius, 0);
  
    let force = 1 * sin(angle);
  angleA = (-1 * force) / 9000;
  angleV += angleA;
  angle += angleV;

  
  //angle = angle + speed;
  
  //if (angle >= 0.8) {
  //  speed = -0.003;
//  } else if (angle <= -0.8) {
  //  speed = 0.003;
 // }
  
}
