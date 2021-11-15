//File for all game constants

//Map Constants

//Temp
let seed = Math.random();

let mapX = 20;
let mapY = 10;
let screenRatio = [30, 20]


//permanent
let worldWidth = mapX * 64 / (mapX / screenRatio[0]);
let worldHeight = mapY * 64 / (mapY / screenRatio[1]);

let minTileAllowance = 1 //Higher number lowers minimum tile type requirements. 1 is exactly the ratio, with no 'free' tiles

let minTileRatio = [25,50,20,5];
let ratioTotal = 0;

for (i = 0; i < minTileRatio.length; i++){
	ratioTotal = ratioTotal + minTileRatio[i];
}

//console.log((mapX * mapY) / ratioTotal)

let minTileType = []
for (i = 0; i < minTileRatio.length; i++){
	console.log(Math.floor(minTileRatio[i] * ((mapX * mapY) / ratioTotal)));
	minTileType.push(Math.floor(minTileRatio[i] * (((mapX * mapY) / minTileAllowance) / ratioTotal)));
}

//console.log(minTileType)

//Code for getting ratio of tile heights
let tileHeights = [] 	//"heights" for tile type (in order): des, pla, sno, mou

tileHeightRatioTotal = 0

for (i = 0; i < minTileRatio.length; i++){
	tileHeightRatioTotal = tileHeightRatioTotal + minTileRatio[i];
}

tileHeights.push(Math.floor(minTileRatio[0] * (100 / tileHeightRatioTotal)))

//console.log(Math.floor(minTileRatio[0] * (100 / tileHeightRatioTotal)))

for (i = 0; i < minTileRatio.length - 1; i++){
	//console.log(i, 'thing: ', Math.floor(minTileRatio[i + 1] * (100 / tileHeightRatioTotal)));
	
	//console.log('minTileRatio[i + 1]: ', minTileRatio[i + 1], '(100 / tileHeightRatioTotal): ', 100 / tileHeightRatioTotal, 'tileHeights[i]: ', tileHeights[i]);

	tileHeights.push(Math.floor(minTileRatio[i + 1] * (100 / tileHeightRatioTotal)) + tileHeights[i]);

}

tileHeights[tileHeights.length - 1] = 101

console.log(tileHeights)

console.log(minTileType)


let intensity = 13
let smoothCycles = 2

let screenWidth = ((mapX + 1) * 64) / (mapX / screenRatio[0]);
let screenHeight = ((mapY + 1) * 64) / (mapY / screenRatio[1]);



//Matter constants

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
		Body = Matter.Body,
		Mouse = Matter.Mouse;

//Sprite Constants:

let spriteScale = 1 / ((mapX / screenRatio[0]) + (mapY / screenRatio[1]) / 2)
let tileScale = 64 / ((mapX / screenRatio[0]) + (mapY / screenRatio[1]) / 2) 

let desertTileSprites = ['Sprites/Tiles/Desert/desert_tile.png','Sprites/Tiles/Desert/desert_tile_1.png','Sprites/Tiles/Desert/desert_tile_2.png','Sprites/Tiles/Desert/desert_tile_3.png',]

let plainsTile = 'Sprites/Tiles/plains_tile.png'

let snowTile = 'Sprites/Tiles/snow_tile.png'

let mountainTileSprites = ['Sprites/Tiles/Mountain/mountain_tile.png','Sprites/Tiles/Mountain/mountain_tile_1.png','Sprites/Tiles/Mountain/mountain_tile_2.png','Sprites/Tiles/Mountain/mountain_tile_3.png',]

let gameFrame = document.getElementById('gameFrame')