function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
  //animation speed
  frameRate(20);


}

function draw() {
  background("black");

  //to create repetitions of ellipses
  for (var a = 0; a <= 100; a++) { //columns
    for (var b = 0; b <= 100; b++) { //rows

      //distance between ellipses
      var x = a * windowWidth / 30; //columns
      var y = b * windowHeight / 30; //rows

      //to create a "falling" movement
      falling = 50 * x + 50 * y + frameCount * 100;


      //"how" the color change
      animation = (sin(falling));

      //create two different blended colors
      //first 2 variables are the colors, the last one indicate how they blend
      colors = lerpColor(color("gold"), color("slateblue"), animation);
      colors1 = lerpColor(color("greenyellow"), color("deeppink"), animation);

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
