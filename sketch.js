

function setup(){
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw(){
  background(0);

  let hr = hour() % 12;
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secHand = map(sc, 0, 60, 0, 360);
  arc(200, 200, 300, 300, -90, secHand);

  stroke(150, 100, 255);
  let minHand = map(mn, 0, 60, 0, 360);
  arc(200, 200, 280, 280, -90, minHand);

  stroke(150, 255, 255);
  let hourHand = map(hr%12, 0, 12, 0, 360);
  arc(200, 200, 260, 260, -90, hourHand);

  fill(255);
  noStroke();
  text(hr + ':' + mn + ':' + sc, width * .45, 200);
}
