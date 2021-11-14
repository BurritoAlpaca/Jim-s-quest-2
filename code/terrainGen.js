//map Generator Code

//Random Seeded Numbers

let biomeGenMin = 0
let biomeGenMax = 101

// Generator for list of tiles that are currently onscreen / generated

for(y = 0; y < mapY; y++){
	tileData.activeTiles.tileMap.push([])
	for(x = 0; x < mapX; x++ ){
		tileData.activeTiles.tileMap[y].push(0)
	}
}

//console.log(tileData.activeTiles.tileMap)

class PRNG {
		constructor(seed) {
			this.seed = seed % 2147483647;
			if (this.seed <= 0) this.seed += 2147483646;
		}

		next(a, b) {
			this.seed = this.seed * 16807 % 2147483647;
			if (arguments.length === 0) return this.seed / 2147483647;
			else if (arguments.length === 1) return (this.seed / 2147483647) * a;
			else return (this.seed / 2147483647) * (b - a) + a;
		}
	}

let random = new PRNG(seed);

function randomSeed(min, max) {
	return Math.floor(random.next(min, max));		//random.next(min,max)
}

function genMapList1(mapX, mapY) {



	//map Base generation
	/*
	How it works:

	map list is an array, has random numbers between 0 and 100 at "co-ordinates" in the list.
	e.g: in a list of 
	[ [ 0, 92, 29, 21, 73, 53, 33, 75, 76, 54 ],
		[ 69, 64, 82, 24, 37, 71, 70, 5, 69, 47 ],
		[ 93, 81, 12, 51, 93, 69, 65, 58, 92, 91 ],
		[ 37, 33, 84, 33, 15, 30, 43, 29, 94, 56 ],
		[ 73, 88, 5, 27, 56, 51, 42, 19, 91, 5 ],
		[ 36, 34, 67, 93, 52, 16, 40, 28, 36, 42 ],
		[ 33, 53, 62, 23, 91, 46, 87, 64, 64, 52 ],
		[ 50, 69, 94, 40, 71, 25, 59, 35, 33, 39 ],
		[ 80, 88, 11, 82, 7, 41, 15, 7, 100, 22 ],
		[ 63, 14, 46, 59, 13, 93, 89, 89, 89, 91 ] ]

		position 3,4 (x 3, y 4) would be the number 27. (starting from 0 as that is how computer interprets)

		those values will then be changed higher or lower depending on the ones around them by a certain amount. eg the 0 next to the 92 will be increased by an amount  (to be decided on).

		this will happen a few times (to be decided) and then it will be split into different biomes depending on the value

		e.g 0 - 10 will be desert, 11-40 will be plains, etc, etc

	*/

	//Generating initial Lists

	let mapList = [];

	for (i = 0; i < mapY; i++) {
		mapList.push([]);
		for (x = 0; x < mapX; x++) {
			mapList[i].push(randomSeed(biomeGenMin, biomeGenMax));
		}
	}

	for (i = 0; i < smoothCycles; i++){
		mapList = averageList(mapList);
	}
	
	return mapList
}


//Taking a list and making another, more averaged list

function averageList(list1){
	let mapCheck = [true, true, true, true]	//List for which directions to check format: [up, down, left, right]

	let numList = [];

	let list2 = []

	for (i = 0; i < mapY; i++){
		list2.push([])
	}

	for (y = 0; y < mapY; y++) {
		for (x = 0; x < mapX; x++) {
			
			mapCheck = [true,true,true,true];
			numList = [];

			//Checks if the number it wants to check is on an edge (prevents errors)
			if (y == 0) {
				mapCheck[0] = false;
			} else if (y == mapY-1){
				mapCheck[1] = false;
			}
			if (x == 0){
				mapCheck[2] = false;
			} else if (x == mapX-1){
				mapCheck[3] = false;
			}

			//console.log('x: ',x, 'y: ', y, 'mapCheck list: ', mapCheck);

			//Math for average of area
			if (mapCheck[0]){	//Up
				numList.push(list1[y-1][x])
			}
			if (mapCheck[1]){	//Down
				numList.push(list1[y+1][x])
			}
			if (mapCheck[2]){	//Left
				numList.push(list1[y][x-1])
			}
			if (mapCheck[3]){	//Right
				numList.push(list1[y][x+1])
			}

			let tempNum = 0;

			//console.log(numList.length)

			for (i = 0; i < numList.length ; i++){
				//console.log(i, numList[i])
				tempNum = tempNum + numList[i];

			}

			tempNum = tempNum / numList.length


			tempNum = Math.floor(tempNum)

			if (tempNum < list1[y][x] && list1[y][x] - tempNum > intensity){
				tempNum = list1[y][x] - intensity
			} else if (tempNum > list1[y][x] && tempNum - list1[y][x] > intensity){
				tempNum = list1[y][x] + intensity
			}

			if (tempNum < 0){
				tempNum = 0
			} else if (tempNum > 100){
				tempNum = 100
			}
			//console.log(tempNum)

			list2[y].push(tempNum);

		}
	}
	
	return list2
}


function genMapList2(mapX, mapY){
	let mapCheck = [true, true]	//List for which directions to check format: [up, down, left, right]

	let numList = [];

	let list = []

	for (i = 0; i < mapY; i++){
		list.push([])
	}

	for (y = 0; y < mapY; y++) {
		for (x = 0; x < mapX; x++) {
			
			mapCheck = [true,true];
			numList = [];


			//Checks if the number it wants to check is on an edge (prevents errors)
			if (y == 0) {
				mapCheck[0] = false;
			}
			if (x == 0){
				mapCheck[1] = false;
			}

			//console.log('x: ',x, 'y: ', y, 'mapCheck list: ', mapCheck);

			//Math for average of area
			if (mapCheck[0]){	//Up
				numList.push(list[y-1][x])
			} 
			if (mapCheck[1]){	//Left
				numList.push(list[y][x-1])
			}

			

			let tempNum = 0;

			for(i = 0; i < numList.length; i++){
				tempNum = tempNum + numList[i];
			}

			tempNum = tempNum / numList.length;

			tempNum1 = Math.floor(tempNum)

			tempCheck1 = randomSeed(0,2)
			
			if(tempNum1 < intensity + intensity / 2){
				
				tempNum2 = tempNum1 + randomSeed(0,intensity)
			
			} else {
				
				if (tempCheck1 == 0){
					tempNum2 = tempNum1 + randomSeed(0,intensity)
				} else if (tempCheck1 == 1){
					tempNum2 = tempNum1 - randomSeed(0,intensity)
				}
			
			}

			if (tempNum2 < tempNum1 && tempNum1 - tempNum2 > intensity){
				tempNum2 = tempNum1 - intensity
			} else if (tempNum2 > tempNum1 && tempNum2 - tempNum1 > intensity){
				tempNum2 = tempNum1 + intensity
			}
			
			if (!mapCheck[0] && !mapCheck[1]){
				tempNum2 = randomSeed(biomeGenMin + 40, biomeGenMax - 40);
				//console.log(list[y][x])
				//console.log('added starter num')
			}

			if (tempNum2 > 100){
				tempNum2 = 100
			}

			//console.log(x,y,mapCheck,tempNum)

			list[y].push(tempNum2);

		}
	}
	
	return list
}

mapList = genMapList2(mapX, mapY)

//console.log(genMap2(mapX, mapY))