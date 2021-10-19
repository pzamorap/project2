var img1, img2, img3, img4, img5, img6, img7, img8;
var slider;
function preload() {
  img1 = loadImage('Assets/1.png');
  img2 = loadImage('Assets/2.png');
  img3 = loadImage('Assets/3.png');
  img4 = loadImage('Assets/4.png');
  img5 = loadImage('Assets/5.png');
  img6 = loadImage('Assets/6.png');
  img7 = loadImage('Assets/7.png');
  img8 = loadImage('Assets/8.png');
}

function setup() {
  createCanvas(375,662);
  background(250);
  image(img1,0,0);
  stage =0
;

}

function draw(){
  if(stage ===0){
  image(img1,0,0)
  }

  if(stage ===1){
  image(img2,0,0)
  }

  if(stage ===2){
  image(img3,0,0)
  }

  if(stage ===3){
  image(img4,0,0)
  }

  if(stage ===4){
  image(img5,0,0)
  }

  if(stage ===5){

  image(img6,0,0)

  }

  if(stage ===6){
  image(img7,0,0)
  }

  if(stage ===7){
    image(img8,0,0)

  }
}
function slider(){
  slider = createSlider(0, 465, 100);
  slider.position(28, 145);
  slider.style('width', '312px')


}
function mouseClicked(){
  if(stage ===0 && mouseX>24 && mouseX<351 && mouseY>494 && mouseY <543){
    stage = 1;
  }

  if(stage ===1 && mouseX>181 && mouseX<197 && mouseY>620 && mouseY <636){
    stage = 2;
  }

  if(stage ===2 && mouseX>197 && mouseX<213 && mouseY>0 && mouseY <667){
    stage = 3;
  }

  if(stage ===3 && mouseX>52 && mouseX<323 && mouseY>507 && mouseY <543){
    stage = 6;
  }


  //////////////////////////////////////////////N A V I G A T I O N  B A R///////////////////////////////////////////////////////

  /////////////// S E C T I O N  1 C O F F E E   ///////////////////////

  if(stage ===6 && mouseX>180 && mouseX<195 && mouseY>631 && mouseY <647){
    stage = 7;
  }
  if(stage ===7 && mouseX>259 && mouseX<276 && mouseY>631 && mouseY <647){
    stage = 6;
  }

  /////////////// S E C T I O N  2 Bug   ///////////////////////

  if(stage ===7 && mouseX>99 && mouseX<115 && mouseY>631 && mouseY <647){
    stage = 5;

  }
  if(stage ===7 && mouseX>259 && mouseX<276 && mouseY>631 && mouseY <647){
    stage = 5;
  }

  /////////////// S E C T I O N  3  H O U S E   ///////////////////////

  if(stage ===5 && mouseX>99 && mouseX<115 && mouseY>631 && mouseY <647){
    stage = 6;
  }
  if(stage ===6 && mouseX>259 && mouseX<276 && mouseY>631 && mouseY <647){
    stage = 5;
  }
  if(stage ===5 && mouseX>180 && mouseX<195 && mouseY>631 && mouseY <647){
    stage = 7;}
























}
