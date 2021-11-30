canvas = new fabric.Canvas('myCanvas')

//Player Position

player_x = 30 
player_y = 60

//Block Dimensions

block_height = 30
block_width = 30

//Defining Objects

player_object = ''
block_object = ''

//Create Player

function Main_code(){
    fabric.Image.fromURL("player.png", function(Img){
    player_object = Img
    player_object.scaleToWidth(50)
    player_object.scaleToHeight(100)
    player_object.set({
        top:player_y,
        left:player_x   
    });
    canvas.add(player_object)
    })
}

//Create Blocks

function UploadBlocks(block){
    fabric.Image.fromURL(block,function(Img){
        block_object = Img;
        block_object.scaleToHeight(block_height)
        block_object.scaleToWidth(block_width)
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object)
    });
}

//Key Event Listener

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keypressed = e.keyCode
    console.log('Key_Code = ' + keypressed)
    // Movement
    if (keypressed == 87){
        Up()
        console.log('up')
    }
    if (keypressed == 83){
        Down()
        console.log('Down')
    }
    if (keypressed == 65){
        Left()
        console.log('Left')
    }
    if (keypressed == 68){
        Right()
        console.log('Right')
    }
   
    //Blocks

    //Wood
    if (keypressed == 49){
        UploadBlocks("wood.jpg")
        console.log('1')
    }
    //Stone
    if (keypressed == 50){
        UploadBlocks("stone.jpg")
        console.log('2')
    }
    //Netherrack
    if (keypressed == 51){
        UploadBlocks("netherrack.jpg")
        console.log('3')
    }
    //L.G Brick
    if (keypressed == 52){
        UploadBlocks("light_green.png")
        console.log('4')
    }
    //Ground
    if (keypressed == 53){
        UploadBlocks("ground.png")
        console.log('5')
    }
    //GlowStone
    if (keypressed == 54){
        UploadBlocks("glowstone.png")
        console.log('6')
    }
    //D.G Brick
    if (keypressed == 55){
        UploadBlocks("dark_green.png")
        console.log('7')
    }
    //Brick
    if (keypressed == 56){
        UploadBlocks("brick.jpg")
        console.log('8')
    }
    //Yellow Brick
    if (keypressed == 57){
        UploadBlocks("yellow_brick.png")
        console.log('9')
    }

   //Changing Brick Dimensions//

   //Brick Bigger
   //Q Pressed
   if (keypressed == 69){
    block_height = block_height + 10
    //Brick Height Restriction
    if (block_height >= 100){
        block_height = 100
        console.log("Big Restricted")
       }

    block_width = block_width + 10
    //Brick Width Restriction
    if (block_width >= 100){
        block_width = 100
        console.log("Big Restricted")
       }

    document.getElementById("block_width").innerHTML = block_width
    document.getElementById("block_height").innerHTML = block_height
   }

   //Brick Smaller
   //E Pressed 
   if (keypressed == 81){
    block_height = block_height - 10
    //Brick Height Restriction
    if (block_height <= 10){
        block_height = 10
        console.log("Small Restricted")
       }
    
    block_width = block_width - 10
    //Brick Width Restriction
    if (block_width <= 10){
        block_width = 10
        console.log("Small Restricted")
       }

    document.getElementById("block_width").innerHTML = block_width
    document.getElementById("block_height").innerHTML = block_height
    
   }


}

function Up() {
    if(player_y >= 0){
        player_y = player_y - block_height
        console.log("Player coordinates = ",player_y,player_x)
        canvas.remove(player_object)
        Main_code()
    }
}
function Down() {
    if(player_y <= 500){
        player_y = player_y + block_height
        console.log("Player coordinates = ",player_y,player_x)
        canvas.remove(player_object)
        Main_code()
    }
}
function Left() {
    if(player_x >= 0){
        player_x = player_x - block_width
        console.log("Player coordinates = ",player_y,player_x)
        canvas.remove(player_object)
        Main_code()
    }
}
function Right() {
    if(player_x <= 1000){
        player_x = player_x + block_width
        console.log("Player coordinates = ",player_y,player_x)
        canvas.remove(player_object)
        Main_code()
    }
}
