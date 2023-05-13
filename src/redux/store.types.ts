import {
	COORDINATE,
	DIRECTION,
	GAME,
	GAME_PLAY_STATE,
} from '../utils/utils.types';

export interface GLOBAL_STORE {
	snake: COORDINATE[] | [];
	gameState: GAME_PLAY_STATE;
	bannedDirection: DIRECTION;
	score: number;
	highscrore: number;
}

export interface ACTION {
	type: DIRECTION | GAME | GAME_PLAY_STATE;
	payload?: any;
}
