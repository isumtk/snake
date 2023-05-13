import {
	PauseIcon,
	PlayIcon,
	ResetIcon,
	RocketIcon,
} from '@radix-ui/react-icons';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBAL_STORE } from '../../redux/store.types';
import { GAME_PLAY_STATE } from '../../utils/utils.types';
import { gameState } from '../../redux/actions';

const Navbar = () => {
	const gamePlayState = useSelector((state: GLOBAL_STORE) => state.gameState);
	const highScore = useSelector((state: GLOBAL_STORE) => state.highscrore);
	const dispatch = useDispatch();

	const toggleGameState = useCallback(() => {
		if (
			gamePlayState === GAME_PLAY_STATE.STOP ||
			gamePlayState === GAME_PLAY_STATE.PAUSED
		) {
			dispatch(gameState(GAME_PLAY_STATE.PLAYING));
		} else if (gamePlayState === GAME_PLAY_STATE.PLAYING) {
			dispatch(gameState(GAME_PLAY_STATE.PAUSED));
		}
	}, [dispatch, gamePlayState]);

	const resetGame = useCallback(() => {
		location.reload();
	}, [location]);
	return (
		<div className="w-full py-1">
			<nav className="flex h-16 w-full items-center">
				<div className="container mx-auto flex h-full items-center justify-between">
					<p className="font-heading text-2xl font-medium uppercase tracking-wider">
						Snake
					</p>

					<span className="flex h-full select-none items-center gap-2 font-sans text-lg lowercase">
						<RocketIcon className="h-6 w-6" />
						<p>Highscore : </p>
						<p>{highScore}</p>
					</span>

					<div className="flex h-full items-center gap-[2px]">
						<button
							onClick={toggleGameState}
							className="unset menu_button bg-inherit-500 flex aspect-square h-9 items-center justify-center gap-1 rounded">
							{gamePlayState === GAME_PLAY_STATE.PAUSED ||
							gamePlayState === GAME_PLAY_STATE.STOP ? (
								<PlayIcon className="h-6 w-6" />
							) : (
								<PauseIcon className="h-6 w-6" />
							)}
						</button>
						<button
							onClick={resetGame}
							className={`${
								gamePlayState === GAME_PLAY_STATE.STOP ? 'invisible' : ''
							}  unset menu_button flex aspect-square h-9 items-center justify-center gap-1 rounded bg-inherit transition-all`}>
							<ResetIcon className="h-6 w-6" />
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;
