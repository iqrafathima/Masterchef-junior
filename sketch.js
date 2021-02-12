var steps, gameState,text;

function setup() {
  createCanvas(800,400);
  //steps = createSprite(400, 200, 50, 80);
  //steps.shapeColor="cyan";
  
}

function draw() {
  background(0,0,0); 
  if (gameState === "serve") {
    fill("blue");
    textSize(25);
    textFont(ITALIC);
    
    text("my recipe",400,200);
   }
   

   

  
  drawSprites();
}