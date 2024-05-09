function setup() {
    createCanvas(666, 503);
    background("white");
  }
  
  function draw() {
  
    stroke("black");
    fill("purple");
  
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 05, 05);
    }
  }
  