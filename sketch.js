var girl, girlImage;
var burger, burgerImage;
var cheese, cheeseImage;
var fries, friesImage;
var bread, breadImage;
var milk, milkImage;
var apple, appleImage;
var juice, juiceImage;
var mango, mangoImage;
var orange, orangeImage;
var yogurt, yogurtImage;
var watermelon, watermelonImage;
var grapes, grapesImage;
var banana, bananaImage;
var score = 0;
var pizza, pizzaImage;
var coke, cokeImage;
var icecream, icecreamImage;
var unhealthyFoodGroup;
var healthyFoodGroup;
var Play = 1;
var END = 0;
var gameState = Play;
var restart,restartImage;



function preload() {
  girlImage = loadImage("girl image.jpg");
  burgerImage = loadImage("burger.png");
  cheeseImage = loadImage("cheese.png");
  friesImage = loadImage("fries.png");
  milkImage = loadImage("milk.png");
  breadImage = loadImage("bread.png");
  yogurtImage = loadImage("yogurt.png");
  appleImage = loadImage("apple.png");
  grapesImage = loadImage("grapes.png");
  orangeImage = loadImage("orange.png");
  bananaImage = loadImage("banana.png");
  watermelonImage = loadImage("watermelon.png");
  mangoImage = loadImage("mango.png");
  juiceImage = loadImage("juice.png");
  pizzaImage = loadImage("pizza.png");
  cokeImage = loadImage("coke.png");
  icecreamImage = loadImage("icecream.png");
  restartImage = loadImage("restart.png");








}
function setup() {
  createCanvas(800, 800);

  girl = createSprite(80, 70, 50, 50);
  girl.addImage("girl", girlImage);
  girl.scale = (0.1);

 // gameOver = createSprite(300,100);
  restart = createSprite(300,140);
  restart.addImage("restart", restartImage);
  restart.scale = (0.1);


  unhealthyFoodGroup = createGroup();
  healthyFoodGroup = createGroup();







}

function draw() {
  background(255, 255, 255);

  
 

  if(gameState === Play){
    //gameOver.visible = false
   // restart.visible = false
    if (keyDown("DOWN_ARROW")) {
      girl.y = girl.y + 2;
  
    }
    if (keyDown("UP_ARROW")) {
      girl.y = girl.y - 2;
    }
    if (keyDown("RIGHT_ARROW")) {
      girl.x = girl.x + 2;
  
    }
    if (keyDown("LEFT_ARROW")) {
      girl.x = girl.x - 2;
  
    }
    if(girl.isTouching(healthyFoodGroup)){
      healthyFoodGroup.destroyEach();
    }
    
    if(girl.isTouching(unhealthyFoodGroup)){
      score = score-5;
    }

    if(girl.isTouching(healthyFoodGroup)){
      score = score+10;

    }
 

   // score = score + Math.round(frameCount/60);


  }

  else if(gameState === END){
    //gameOver.visible = true
    if(girl.isTouching(unhealthyFoodGroup)){
      restart.visible = true
    }
    
   
   
  }

  unhealthyFood();
  healthyFood();
  drawSprites();

}

function unhealthyFood() {
  if (frameCount % 60 === 0) {
    var unhealthyFood = createSprite(400, 0, 10, 40);
    unhealthyFood.velocityY = (4 + 3 * score / 100);
    unhealthyFood.x = Math.round(random(10, 800));
    var rand = Math.round(random(1, 8));
    switch (rand) {
      case 1: unhealthyFood.addImage(burgerImage);
        break;
      case 2: unhealthyFood.addImage(friesImage);
        break;
      case 3: unhealthyFood.addImage(pizzaImage);
        break;
      case 4: unhealthyFood.addImage(cokeImage);
        break;
      case 5: unhealthyFood.addImage(juiceImage);
        break;
      case 6: unhealthyFood.addImage(icecreamImage);
        break;
      case 7: unhealthyFood.addImage(breadImage);
        break;
      case 8: unhealthyFood.addImage(cheeseImage);
      default:
        break;
    }



    unhealthyFood.scale = 0.3;
    unhealthyFood.lifetime = 300;


    unhealthyFoodGroup.add(unhealthyFood);


  }

  }



  function healthyFood() {
    if (frameCount % 60 === 0) {
      var healthyFood = createSprite(600, 0, 10, 40);
      healthyFood.velocityY = (4 + 3 * score / 100);
      healthyFood.x = Math.round(random(10, 800));
      var rand = Math.round(random(1, 8));
      switch (rand) {
        case 1: healthyFood.addImage(milkImage);
          break;
        case 2: healthyFood.addImage(milkImage);
          break;
        case 3: healthyFood.addImage(appleImage);
          break;
        case 4: healthyFood.addImage(bananaImage);
          break;
        case 5: healthyFood.addImage(mangoImage);
          break;
        case 6: healthyFood.addImage(grapesImage);
          break;
        case 7: healthyFood.addImage(watermelonImage);
          break;
        case 8: healthyFood.addImage(yogurtImage);
        default:
          break;
      }



       healthyFood.scale = 0.3;
      healthyFood.lifetime = 300;


      healthyFoodGroup.add(healthyFood);

    }

  }
