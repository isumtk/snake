import {
	PauseIcon,
	PlayIcon,
	ResetIcon,
	RocketIcon,
} from '@radix-ui/react-icons';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { GLOBAL_STORE } from '../../redux/store.types';

const Navbar = () => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [canReset, setCanReset] = useState<boolean>(false);
	const highScore = useSelector((state: GLOBAL_STORE) => state.highscrore);

	const toggleGameState = useCallback(() => {
		if (canReset) {
			if (isPlaying) {
				setIsPlaying(false);
			} else {
				setIsPlaying(true);
			}
		} else {
			setIsPlaying(true);
			setCanReset(true);
		}
	}, [setIsPlaying, setCanReset, canReset, isPlaying]);

	const resetGame = useCallback(() => {
		setIsPlaying(false);
		setCanReset(false);
	}, [setCanReset, setIsPlaying]);
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
							{!isPlaying ? (
								<PlayIcon className="h-6 w-6" />
							) : (
								<PauseIcon className="h-6 w-6" />
							)}
						</button>
						<button
							onClick={resetGame}
							className={`${
								!canReset ? 'invisible' : ''
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
