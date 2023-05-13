import {
	DIRECTION,
	DIRECTION_OPPOSITE,
	GAME,
	GAME_PLAY_STATE,
} from '../../utils/utils.types';

export function move(dx: number, dy: number, action: DIRECTION) {
	return {
		type: action,
		payload: [dx, dy, DIRECTION_OPPOSITE[action]],
	};
}

export function game(action: GAME) {
	return {
		type: action,
	};
}

export function gameState(action: GAME_PLAY_STATE) {
	return {
		type: action,
	};
}
