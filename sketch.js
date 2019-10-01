function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
  //animation speed
  frameRate(10);


}

function draw() {
  background("black");

  //to create repetitions of ellipses
  for (a = 0; a <= 30; a++) {
    for (b = 0; b <= 30; b++) {
      //distance between ellipses
      var x = a * width / 30;
      y = b * height / 30;

      //to create an animated diagonal
      angle = 20 * a + 20 * b + frameCount * 50;
      lerp = Math.abs(cos(angle));

      //create two different blended colors
      colors = lerpColor(color("gold"), color("slateblue"), lerp);
      colors1 = lerpColor(color("greenyellow"), color("deeppink"), lerp);

      //to create a size variation due to the mouse position
      var d = map(mouseX, 0, width, 0, 20);

      //ellipse coordinates and diameter
      ellipse(x, y, d);




      //to create a change of colors due to the mouse click
      if (mouseIsPressed) {
        fill(colors);

      } else {
        fill(colors1);
      }


      //written instructions
      text('Drag the cursor and click!', 50, 50);
      textSize(20);



    }
  }

}
