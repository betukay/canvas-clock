function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(0);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(4);
  stroke(255);
  noFill();
  ellipse(200, 200, 300, 300);

//  fill(255);
//  noStroke();
//  text(hr + ':' + mn + ':' + sc, 10, 200);
}
