export interface COORDINATE {
	x: number;
	y: number;
}

export enum DIRECTIONS {
	UP = 'UP',
	DOWN = 'DOWN',
	LEFT = 'LEFT',
	RIGHT = 'RIGHT',
}

export enum GAME {
	INCREASE_SCORE = 'INCREASE_SCORE',
}

export const GAME_BLOCK_SIZE = 20;
