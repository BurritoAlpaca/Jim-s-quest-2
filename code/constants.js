//File for all game constants

//Map Constants

//Temp
let seed = Math.random();

let mapX = 20;
let mapY = 10;


//permanent
let worldWidth = mapX * 64;
let worldHeight = mapY * 64;

let desertHeight = 30;
let plainsHeight = 60;
let snowHeight = 80;
let mountainHeight = 100;

let minTileRatio = [3,4,2,1];
let ratioTotal = 0;

for (i = 0; i < minTileRatio.length; i++){
	ratioTotal = ratioTotal + minTileRatio[i];
}

console.log((mapX * mapY) / ratioTotal)

let minTileType = []
for (i = 0; i < minTileRatio.length; i++){
	console.log(Math.floor(minTileRatio[i] * ((mapX * mapY) / ratioTotal)));
	minTileType.push(Math.floor(minTileRatio[i] * (((mapX * mapY) / 1.5) / ratioTotal)));
}

console.log(minTileType)


let intensity = 13
let smoothCycles = 2

let screenWidth = (mapX + 1) * 64;
let screenHeight = (mapY + 1) * 64;



//Matter constants

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
		Body = Matter.Body,
		Mouse = Matter.Mouse;

//Sprite Constants:

let spriteScale = 1
let tileScale = 64

let desertTileSprites = ['Sprites/Tiles/Desert/desert_tile.png','Sprites/Tiles/Desert/desert_tile_1.png','Sprites/Tiles/Desert/desert_tile_2.png','Sprites/Tiles/Desert/desert_tile_3.png',]

let plainsTile = 'Sprites/Tiles/plains_tile.png'

let snowTile = 'Sprites/Tiles/snow_tile.png'

let mountainTileSprites = ['Sprites/Tiles/Mountain/mountain_tile.png','Sprites/Tiles/Mountain/mountain_tile_1.png','Sprites/Tiles/Mountain/mountain_tile_2.png','Sprites/Tiles/Mountain/mountain_tile_3.png',]

let gameFrame = document.getElementById('gameFrame')