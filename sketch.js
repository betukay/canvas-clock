function setup(){
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw(){
  background(0);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let end1 = map(sc, 0, 60, 0, 360);
  arc(200, 200, 300, 300, -90, end1);

  stroke(150, 100, 255);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(200, 200, 280, 280, -90, end2);

  stroke(150, 255, 255);
  let end3 = map(hr%12, 0, 12, 0, 360);
  arc(200, 200, 260, 260, -90, end3);

//  fill(255);
//  noStroke();
//  text(hr + ':' + mn + ':' + sc, 10, 200);
}
