function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES);
  noStroke();
  frameRate(10)


}

function draw() {
  background("black");

  for (a = 0; a <= 30; a++) {
    for (b = 0; b <= 30; b++) {
      let x = a * width / 30,
        y = b * height / 30,

        angle = 20 * a + 20 * b + frameCount * 50,
        r = 20,


        lerp = Math.abs(cos(angle)),
        colors = lerpColor(color("gold"), color("slateblue"), lerp);
      colors1 = lerpColor(color("greenyellow"), color("deeppink"), lerp);

      let d = map(mouseX, 0, width, 0, 20);


      ellipse(x, y, d);





      if (mouseIsPressed) {
        fill(colors);

      } else {
        fill(colors1);
      }

      text('Move the cursor and click!', 50, 50);
      textSize(20);



    }
  }

}
