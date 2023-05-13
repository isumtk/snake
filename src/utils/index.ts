import { COORDINATE, DIRECTION, GAME_BLOCK_SIZE } from './utils.types';

export function randomNumberGenerator(maxRange: number) {
	let random = Math.random() * maxRange;
	return random - (random % GAME_BLOCK_SIZE);
}

export function spawnFood(width: number, height: number) {
	return { x: randomNumberGenerator(width), y: randomNumberGenerator(height) };
}

export function clearCanvas(
	context: CanvasRenderingContext2D | null,
	width: number,
	height: number
) {
	if (context) {
		context.clearRect(0, 0, width, height);
	}
}

export function whereNewBody(a: COORDINATE, b: COORDINATE) {
	if (a.y - b.y < 0) {
		return DIRECTION.UP;
	} else if (a.x - b.x < 0) {
		return DIRECTION.LEFT;
	} else if (a.x - b.x > 0) {
		return DIRECTION.RIGHT;
	} else if (a.y - b.y > 0) {
		return DIRECTION.DOWN;
	}
}

export function drawObject(
	context: CanvasRenderingContext2D | null,
	object: COORDINATE[],
	strokeStyle: string,
	fillStyle: string
) {
	if (context) {
		object.forEach((pos: COORDINATE) => {
			context.fillStyle = fillStyle;
			context.fillRect(pos.x, pos.y, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);

			if (strokeStyle) {
				context.strokeStyle = strokeStyle;
				context.strokeRect(pos.x, pos.y, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
			}
		});
	}
}
