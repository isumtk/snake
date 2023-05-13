import { whereNewBody } from '../../utils';
import {
	COORDINATE,
	DIRECTION,
	GAME,
	GAME_BLOCK_SIZE,
	GAME_PLAY_STATE,
} from '../../utils/utils.types';
import { ACTION, GLOBAL_STORE } from '../store.types';

const GAME_STATE: GLOBAL_STORE = {
	snake: [
		{ x: 580, y: 300 },
		{ x: 560, y: 300 },
		{ x: 540, y: 300 },
		{ x: 520, y: 300 },
		{ x: 500, y: 300 },
	],
	gameState: GAME_PLAY_STATE.STOP,
	bannedDirection: DIRECTION.LEFT,
	score: 0,
	highscrore: 0,
};

const GAME_REDUCER = (state = GAME_STATE, action: ACTION) => {
	switch (action.type) {
		case DIRECTION.UP:
		case DIRECTION.DOWN:
		case DIRECTION.LEFT:
		case DIRECTION.RIGHT: {
			let newBody: COORDINATE[] = [...state.snake];
			newBody = [
				{
					x: state.snake[0].x + action.payload[0],
					y: state.snake[0].y + action.payload[1],
				},
				...newBody,
			];

			newBody.pop();

			return { ...state, snake: newBody };
		}
		case GAME.INCREASE_SCORE: {
			const snakeLength: number = state.snake.length;

			const lastSection = state.snake[snakeLength - 1];
			const seclastSection = state.snake[snakeLength - 2];

			const newOrgan: COORDINATE = {
				x: state.snake[snakeLength - 1].x,
				y: state.snake[snakeLength - 1].y,
			};

			switch (whereNewBody(lastSection, seclastSection)) {
				case DIRECTION.UP: {
					newOrgan.y -= GAME_BLOCK_SIZE;
					break;
				}
				case DIRECTION.DOWN: {
					newOrgan.y += GAME_BLOCK_SIZE;
					break;
				}
				case DIRECTION.LEFT: {
					newOrgan.x -= GAME_BLOCK_SIZE;
					break;
				}
				case DIRECTION.RIGHT: {
					newOrgan.x += GAME_BLOCK_SIZE;
					break;
				}
				default: {
					break;
				}
			}

			return {
				...state,
				snake: [...state.snake, newOrgan],
				score: state.score + 1,
			};
		}

		case GAME_PLAY_STATE.STOP: {
			return { ...state, gameState: GAME_PLAY_STATE.STOP };
		}

		case GAME_PLAY_STATE.PAUSED: {
			return { ...state, gameState: GAME_PLAY_STATE.PAUSED };
		}

		case GAME_PLAY_STATE.PLAYING: {
			return { ...state, gameState: GAME_PLAY_STATE.PLAYING };
		}

		default: {
			return state;
		}
	}
};

export default GAME_REDUCER;
