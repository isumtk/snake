export interface COORDINATE {
	x: number;
	y: number;
}

export enum DIRECTION {
	UP = 'UP',
	DOWN = 'DOWN',
	LEFT = 'LEFT',
	RIGHT = 'RIGHT',
}

export enum GAME_PLAY_STATE {
	STOP = 'STOP',
	PLAYING = 'PLAYING',
	PAUSED = 'PAUSED',
}

export enum DIRECTION_OPPOSITE {
	UP = 'DOWN',
	DOWN = 'UP',
	LEFT = 'RIGHT',
	RIGHT = 'LEFT',
}

export enum GAME {
	INCREASE_SCORE = 'INCREASE_SCORE',
}

export const GAME_BLOCK_SIZE = 20;
