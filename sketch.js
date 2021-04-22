var house1, house2, house3, house4;
var p1, p2, p3, p4, p5, p6, p7, p8;
var pc;
var covid, counter = 0;

function setup() {
  createCanvas(800,400);
 house1 = createSprite(100, 50, 200, 100);
 house1.shapeColor = "white";
 house2 = createSprite(700, 50, 200, 100);
 house2.shapeColor = "white";
 house3 = createSprite(100, 350, 200, 100);
 house3.shapeColor = "white";
 house4 = createSprite(700, 350, 200, 100);
 house4.shapeColor = "white";
 p1 = createSprite(80, 50, 20, 20);
 p1.shapeColor = "green";
 p2 = createSprite(130, 50, 20, 20);
 p2.shapeColor = "green";
 p3 = createSprite(680, 50, 20, 20);
 p3.shapeColor = "green";
 p4 = createSprite(730, 50, 20, 20);
 p4.shapeColor = "green";
 p5 = createSprite(80, 350, 20, 20);
 p5.shapeColor = "green";
 p6 = createSprite(130, 350, 20, 20);
 p6.shapeColor = "green";
 p7 = createSprite(680, 350, 20, 20);
 p7.shapeColor = "green";
 p8 = createSprite(730, 350, 20, 20);
 p8.shapeColor = "green";
 covid = createSprite(400, 200, 10, 10);
 covid.shapeColor = "red";
pc = createSprite(450, 200, 20, 20);
pc.shapeColor = "blue";
}
function draw() {
  background(0); 
  pc.x = World.mouseX;
  pc.y = World.mouseY;
  p1.velocityX = 7;
  p1.velocityY = 3;
  p2.velocityX = 7;
  p2.velocityY = 4;
  p3.velocityX = -7;
  p3.velocityY = 4;
  p4.velocityX = -7;
  p4.velocityY = 3;
  p5.velocityX = 7;
  p5.velocityY = -3;
  p6.velocityX = 7;
  p6.velocityY = -4;
  p7.velocityX = -7;
  p7.velocityY = -4;
  p8.velocityX = -7;
  p8.velocityY = -3;
  edges = createEdgeSprites();
  p1.bounceOff(edges[0]);
  p1.bounceOff(edges[1]);
  p1.bounceOff(edges[2]); 
  p1.bounceOff(edges[3]);
  p1.bounceOff(house2); 
  p1.bounceOff(house3); 
  p1.bounceOff(house4);
  p2.bounceOff(edges[0]);
  p2.bounceOff(edges[1]);
  p2.bounceOff(edges[2]); 
  p2.bounceOff(edges[3]);
  p2.bounceOff(house2); 
  p2.bounceOff(house3); 
  p2.bounceOff(house4);
  p3.bounceOff(edges[0]);
  p3.bounceOff(edges[1]);
  p3.bounceOff(edges[2]); 
  p3.bounceOff(edges[3]);
  p3.bounceOff(house1); 
  p3.bounceOff(house3); 
  p3.bounceOff(house4);
  p4.bounceOff(edges[0]);
  p4.bounceOff(edges[1]);
  p4.bounceOff(edges[2]); 
  p4.bounceOff(edges[3]);
  p4.bounceOff(house1); 
  p4.bounceOff(house3); 
  p4.bounceOff(house4);
  p5.bounceOff(edges[0]);
  p5.bounceOff(edges[1]);
  p5.bounceOff(edges[2]); 
  p5.bounceOff(edges[3]);
  p5.bounceOff(house1); 
  p5.bounceOff(house2); 
  p5.bounceOff(house4);
  p6.bounceOff(edges[0]);
  p6.bounceOff(edges[1]);
  p6.bounceOff(edges[2]); 
  p6.bounceOff(edges[3]);
  p6.bounceOff(house1); 
  p6.bounceOff(house2); 
  p6.bounceOff(house4);
  p7.bounceOff(edges[0]);
  p7.bounceOff(edges[1]);
  p7.bounceOff(edges[2]); 
  p7.bounceOff(edges[3]);
  p7.bounceOff(house1); 
  p7.bounceOff(house2); 
  p7.bounceOff(house3);
  p8.bounceOff(edges[0]);
  p8.bounceOff(edges[1]);
  p8.bounceOff(edges[2]); 
  p8.bounceOff(edges[3]);
  p8.bounceOff(house1); 
  p8.bounceOff(house2); 
  p8.bounceOff(house3);
  p1.bounce(p2);
  p1.bounce(p3);
  p1.bounce(p4);
  p1.bounce(p5);
  p1.bounce(p6);
  p1.bounce(p7);
  p1.bounce(p8);
  p2.bounce(p3);
  p2.bounce(p4);
  p2.bounce(p5);
  p2.bounce(p6);
  p2.bounce(p7);
  p2.bounce(p8);
  p3.bounce(p4);
  p3.bounce(p5);
  p3.bounce(p6);
  p3.bounce(p7);
  p3.bounce(p8);
  p4.bounce(p5);
  p4.bounce(p6);
  p4.bounce(p7);
  p4.bounce(p8);
  p5.bounce(p6);
  p5.bounce(p7);
  p5.bounce(p8);
  p6.bounce(p7);
  p6.bounce(p8);
  p7.bounce(p8);
   if(p2.isTouching(covid)){
    p2.shapeColor = "red";
    p2.velocityX = -7;
    p2.velocityY = 4;
    console.log("p2");
   }
 if(p3.isTouching(covid)){
   p3.shapeColor = "red";
   console.log("p3");
 }
  if(p6.isTouching(covid)){
    p6.shapeColor = "red";
    console.log("p6");
  }
  if(p7.isTouching(covid)){
    p7.shapeColor = "red";
    console.log("p7");
  }
  if(p1.isTouching(p6)){
    p1.shapeColor = "red";
    console.log("p1");
  }
  if(p4.isTouching(p6)){
    p4.shapeColor = "red";
    console.log("p4");
  }
  if(p5.isTouching(covid)){
    p5.shapeColor = "red";
    console.log("p5");
  }
  if(p8.isTouching(covid)){
    p8.shapeColor = "red";
  }
  if(p8.shapeColor === "red"){
    counter = 1;
  }
  if(counter === 1){
    fill("red");
    textSize(17);
    text("People Not Following The Rules Of Quarantine got infected with COVID infection. Stay Home, Stay Safe", 7, 280);
  }
  if(pc.isTouching(house1) || pc.isTouching(house2) || pc.isTouching(house3) || pc.isTouching(house4)){
    counter = 2;
  }
  if(counter === 2){
    fill("red");
    textSize(20);
    text("Home Isolation Is The Only Prevention and Cure To COVID 19", 100, 150);
  }
  switch(1){
    case 1: if(p2.isTouching(covid)){
     p2.shapeColor = "red";
    }
    break;
    case 2: if(p1.isTouching(covid)){
      p1.shapeColor = "red";
     }
     else if(p2.shapeColor === "red" && p1.isTouching(p2) ){
      p1.shapeColor = "red";
      
    
     }
     break;
     case 3: if(p3.isTouching(covid)){
      p3.shapeColor = "red";
     }

     break;
     case 4: if(p4.isTouching(covid)){
      p4.shapeColor = "red";
     }
     break;
     case 5: if(p5.isTouching(covid)){
      p5.shapeColor = "red";
     }
     else if(p6.shapeColor === "red" && p5.isTouching(p6)){
       p5.shapeColor = "red";
     }
     break;
     case 6: if(p6.isTouching(covid)){
       p6.shapeColor = "red";
     }
     else if(p1.shapeColor === "red" && p6.isTouching(p1)){
       p6.shapeColor = "red";
     }
     break;
     case 7: if(p7.isTouching(covid)){
      p7.shapeColor = "red";
     }
     break;
     case 8: if(p8.isTouching(covid)){
      p8.shapeColor = "red";
     }
     break;
    default: break;
  }
  
  
  drawSprites();
}