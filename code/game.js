//Main File

//Function that renders map


function addMap(mapList){

	let tileCount = [0,0,0,0]	//tracks amount of tiles and type [des, pla, sno, mou]

	for(y = 0; y < mapY; y++){

		for(x = 0; x < mapX; x++){

			World.remove(engine.world, tileData.activeTiles.tileMap[y][x])

			if (mapList[y][x] <= desertHeight){

				tempTile = Bodies.rectangle(x * tileScale + tileScale, y * tileScale + tileScale, tileScale, tileScale, tileData.generateData.desert);

				tileCount[0] = tileCount[0] + 1;

				tileNum = randomSeed(0,desertTileSprites.length);
				tempTile.render.sprite.texture = desertTileSprites[tileNum];

			} else if (mapList[y][x] <= plainsHeight){
			
				tempTile = Bodies.rectangle(x * tileScale + tileScale, y * tileScale + tileScale, tileScale, tileScale, tileData.generateData.plains);

				tileCount[1] = tileCount[1] + 1;

			} else if (mapList[y][x] <= snowHeight){
			
				tempTile = Bodies.rectangle(x * tileScale + tileScale, y * tileScale + tileScale, tileScale, tileScale, tileData.generateData.snow);

				tileCount[2] = tileCount[2] + 1;
			
			} else if (mapList[y][x] <= mountainHeight){
			
				tempTile = Bodies.rectangle(x * tileScale + tileScale, y * tileScale + tileScale, tileScale, tileScale, (tileData.generateData.mountain));

				tileCount[3] = tileCount[3] + 1;

				tileNum = randomSeed(0,mountainTileSprites.length);
				tempTile.render.sprite.texture = mountainTileSprites[tileNum];
			}
			
			tileData.activeTiles.tileMap[y][x] = tempTile

			World.add(engine.world, tileData.activeTiles.tileMap[y][x]);
		}
	
	}

	return tileCount

}
//console.log(mapList);

let genMapButton = document.getElementById('genMapButton'); //Defines button to generate new sentence

function genMap(){

	generateAttempt = 0

	mapCheck = true

	//Generates initial map
	console.log('generating new map')

	seed = Math.random();
	random = new PRNG(seed);
	mapList = genMapList2(mapX, mapY);
	tileCount = addMap(mapList);


	//Makes sure map is balanced
	while (mapCheck){

		generateAttempt = generateAttempt + 1

		reMap = false;
		

		for (i = 0; i < tileCount.length; i++){
			if (tileCount[i] < minTileType[i]){
				reMap = true;
			}
		}

		console.log(reMap, tileCount, minTileType)



		if (reMap){
			console.log('generating new map, attempt: ', generateAttempt)

			tileCount = [0,0,0,0]

			seed = Math.random();
			random = new PRNG(seed);
			mapList = genMapList2(mapX, mapY);
			tileCount = addMap(mapList);

		} else {
			mapCheck = false
		}
	}

	console.log('Desert: ', tileCount[0],'Plains: ', tileCount[1],'Snow: ', tileCount[2],'Mountain: ', tileCount[3],);
}

//Button to generate a new map 
genMapButton.addEventListener("click", function(e) {
	genMap()
});



Matter.Runner.run(engine);
