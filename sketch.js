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
  for (a = 0; a <= width / 30; a++) { //columns
    for (b = 0; b <= height / 30; b++) { //rows

      //distance between ellipses
      var x = a * width / 30; //columns
      var y = b * height / 30; //rows

      //to create an animated diagonal
      diagonal = 20 * a + 20 * b + frameCount * 50;
      //vertical = 20 * x + 20 * y + frameCount * 50; (vertical movement)


      //"how" the color change
      animation = (cos(diagonal));

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
