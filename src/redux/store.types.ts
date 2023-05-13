import { COORDINATE, DIRECTIONS, GAME } from '../utils/utils.types';

export interface GLOBAL_STORE {
	snake: COORDINATE[] | [];
	bannedDirection: DIRECTIONS | null;
	score: number;
	highscrore: number;
}

export interface ACTION {
	type: DIRECTIONS | GAME;
	payload?: any;
}
