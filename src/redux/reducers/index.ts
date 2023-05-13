import { ACTION, GLOBAL_STORE } from '../store.types';

const GAME_STATE: GLOBAL_STORE = {
	snake: [
		{ x: 580, y: 300 },
		{ x: 560, y: 300 },
		{ x: 540, y: 300 },
		{ x: 520, y: 300 },
		{ x: 500, y: 300 },
	],
	bannedDirection: null,
	score: 0,
	highscrore: 0,
};

const GAME_REDUCER = (state = GAME_STATE, action: ACTION) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};

export default GAME_REDUCER;
