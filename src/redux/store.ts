import { configureStore } from '@reduxjs/toolkit';
import GAME_REDUCER from './reducers';

export const store = configureStore({
	reducer: GAME_REDUCER,
});
