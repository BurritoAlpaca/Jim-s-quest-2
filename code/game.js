//Main File

//Function that checks map

function tileCounter(map){
	tileCount = [0,0,0,0];
	newMap = []

	for (y = 0; y < map.length; y++){
		//console.log(map[y].length)
		newMap.push([]);

		for(x = 0; x < map[y].length; x++){
			
			//console.log('x: ', x)
			//console.log('tileHeights: ', tileHeights)
			
			if(map[y][x] < tileHeights[0]){

				tileCount[0] = tileCount[0] + 1;
				newMap[y].push(0);

			} else if(map[y][x] < tileHeights[1]){	

				tileCount[1] = tileCount[1] + 1;
				newMap[y].push(1);

			} else if(map[y][x] < tileHeights[2]){

				tileCount[2] = tileCount[2] + 1;
				newMap[y].push(2);

			} else if(map[y][x] < tileHeights[3]){

				tileCount[3] = tileCount[3] + 1;
				newMap[y].push(3);

			}
		}
	}
	//console.log(newMap, tileCount)
	return newMap
}

//console.log(mapList);

let genMapButton = document.getElementById('genMapButton'); //Defines button to generate new sentence

let tileCount = [0,0,0,0]

function genMap(){

	generateAttempt = 0

	mapCheck = true

	//Generates initial map
	console.log('generating new map')

	seed = Math.random();
	random = new PRNG(seed);
	mapList = genMapList2(mapX, mapY);
	newMapList = tileCounter(mapList);


	//Makes sure map is balanced
	while (mapCheck){

		generateAttempt = generateAttempt + 1

		reMap = false;
		

		for (i = 0; i < tileCount.length; i++){
			if (tileCount[i] < minTileType[i]){
				reMap = true;
			}
		}

		//console.log(reMap, tileCount, minTileType)



		if (reMap){
			//console.log('generating new map, attempt: ', generateAttempt)

			tileCount = [0,0,0,0]

			seed = Math.random();
			random = new PRNG(seed);
			mapList = genMapList2(mapX, mapY);
			newMapList = tileCounter(mapList)

		} else {
			mapCheck = false
		}
	}

	console.log('success, attempt: ', generateAttempt, 'seed: ', seed)
	
	renderMap(newMapList);

	console.log('Desert: ', tileCount[0],'Plains: ', tileCount[1],'Snow: ', tileCount[2],'Mountain: ', tileCount[3],);
}

//Button to generate a new map 
genMapButton.addEventListener("click", function(e) {
	genMap()
});



Matter.Runner.run(engine);
