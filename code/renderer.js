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

Render.run(render);