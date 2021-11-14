//File for initializing and defining objects



let tileData = {
	activeTiles: {
		tileMap: []
	},
	generateData: {
		desert: {
			isStatic: true,
			collisionFilter: -1,
			shape: {
				hitbox: 'square',
				height: tileScale,
				width: tileScale
			},
			render: {
				sprite: {
					texture: 'Sprites/Tiles/desert_tile.png',
					xScale: spriteScale,
					yScale: spriteScale
				}
			}
		},
		plains: {
			isStatic: true,
			collisionFilter: -1,
			shape: {
				hitbox: 'square',
				height: tileScale,
				width: tileScale
			},
			render: {
				sprite: {
					texture: 'Sprites/Tiles/plains_tile.png',
					xScale: spriteScale,
					yScale: spriteScale
				}
			}
		},
		snow: {
			isStatic: true,
			collisionFilter: -1,
			shape: {
				hitbox: 'square',
				height: tileScale,
				width: tileScale
			},
			render: {
				sprite: {
					texture: 'Sprites/Tiles/snow_tile.png',
					xScale: spriteScale,
					yScale: spriteScale
				}
			}
		}, 
		mountain: {
			isStatic: true,
			collisionFilter: -1,
			shape: {
				hitbox: 'square',
				height: tileScale,
				width: tileScale
			},
			render: {
				sprite: {
					texture: 'Sprites/Tiles/mountain_tile.png',
					xScale: spriteScale,
					yScale: spriteScale
				}
			}
		}
	}
}