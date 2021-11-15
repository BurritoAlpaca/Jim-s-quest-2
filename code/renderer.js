//File for renderer

var render = Render.create({
                element: gameFrame,
                engine: engine,
                options: {
                    width: screenWidth,
                    height: screenHeight,
                    wireframes: false,
									  showAngleIndicator: false,
										pixelRatio: 'auto'
                }
             });

/*
render.bounds.max.x = window.innerWidth;
render.bounds.max.y = window.innerHeight;
render.options.width = window.innerWidth;
render.options.height = window.innerHeight;
render.canvas.width = window.innerWidth;
render.canvas.height = window.innerHeight;

window.addEventListener('resize', () => { 
  render.bounds.max.x = window.innerWidth;
  render.bounds.max.y = window.innerHeight;
  render.options.width = window.innerWidth;
  render.options.height = window.innerHeight;
  render.canvas.width = window.innerWidth;
  render.canvas.height = window.innerHeight;
});
*/


function renderMap(mapList){

	let tileCount = [0,0,0,0]	//tracks amount of tiles and type [des, pla, sno, mou]

	for(y = 0; y < mapY; y++){

		for(x = 0; x < mapX; x++){

			World.remove(engine.world, tileData.activeTiles.tileMap[y][x])

			if (mapList[y][x] == 0){

				tempTile = Bodies.rectangle(x * tileScale + tileScale, y * tileScale + tileScale, tileScale, tileScale, tileData.generateData.desert);

				tileNum = randomSeed(0,desertTileSprites.length);
				tempTile.render.sprite.texture = desertTileSprites[tileNum];

			} else if (mapList[y][x] == 1){
			
				tempTile = Bodies.rectangle(x * tileScale + tileScale, y * tileScale + tileScale, tileScale, tileScale, tileData.generateData.plains);

			} else if (mapList[y][x] == 2){
			
				tempTile = Bodies.rectangle(x * tileScale + tileScale, y * tileScale + tileScale, tileScale, tileScale, tileData.generateData.snow);
			
			} else if (mapList[y][x] == 3){
			
				tempTile = Bodies.rectangle(x * tileScale + tileScale, y * tileScale + tileScale, tileScale, tileScale, (tileData.generateData.mountain));

				tileNum = randomSeed(0,mountainTileSprites.length);
				tempTile.render.sprite.texture = mountainTileSprites[tileNum];
			}
			
			tileData.activeTiles.tileMap[y][x] = tempTile

			World.add(engine.world, tileData.activeTiles.tileMap[y][x]);
		}
	
	}

}

Render.run(render);