import { useCallback, useEffect, useRef, useState } from 'react';
import {
	COORDINATE,
	DIRECTION,
	GAME,
	GAME_BLOCK_SIZE,
} from '../../utils/utils.types';
import { clearCanvas, drawObject, spawnFood } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBAL_STORE } from '../../redux/store.types';
import { game, move } from '../../redux/actions';

interface CanvasProps {
	height: number;
	width: number;
}

const Canvas: React.FC<CanvasProps> = ({ height, width }) => {
	// Redux Helpers
	const dispatch = useDispatch();
	const snake: COORDINATE[] = useSelector((state: GLOBAL_STORE) => state.snake);
	const score: number = useSelector((state: GLOBAL_STORE) => state.score);
	const bannedMove = useSelector(
		(state: GLOBAL_STORE) => state.bannedDirection
	);

	// Board Variables
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

	// Game Variables
	const [isCollided, setIsCollided] = useState<boolean>(false);
	const [isConsumed, setIsConsumed] = useState<boolean>(false);
	const [target, setTarget] = useState<COORDINATE>(
		spawnFood(width - 20, height - 20)
	);

	const moveSnake = useCallback(
		(dx: number, dy: number) => {
			if (dx === 0) {
				if (dy > 0) {
					dispatch(move(dx, dy, DIRECTION.DOWN));
				} else {
					dispatch(move(dx, dy, DIRECTION.UP));
				}
			} else {
				if (dx > 0) {
					dispatch(move(dx, dy, DIRECTION.RIGHT));
				} else {
					dispatch(move(dx, dy, DIRECTION.LEFT));
				}
			}
		},
		[dispatch]
	);

	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			const { key } = event;
			switch (key) {
				case 'w': {
					moveSnake(0, -GAME_BLOCK_SIZE);
					break;
				}
				case 's': {
					moveSnake(0, GAME_BLOCK_SIZE);
					break;
				}
				case 'a': {
					moveSnake(-GAME_BLOCK_SIZE, 0);
					break;
				}
				case 'd': {
					moveSnake(GAME_BLOCK_SIZE, 0);
					break;
				}
				default: {
					break;
				}
			}
		},
		[moveSnake]
	);

	useEffect(() => {
		if (isConsumed) {
			setTimeout(() => {
				dispatch(game(GAME.INCREASE_SCORE));
			}, 10);
			const newTarget = spawnFood(width - 20, height - 20);
			setTarget(newTarget);
			setIsConsumed(false);
		}
	}, [isConsumed, target, dispatch]);

	// useEffect to redraw the snake whenever it changes position
	useEffect(() => {
		setContext(canvasRef.current && canvasRef.current.getContext('2d'));
		clearCanvas(context, width, height);
		drawObject(context, snake, '', '#101010');
		drawObject(context, [target], '', 'red');

		if (snake[0].x === target?.x && snake[0].y === target?.y) {
			setIsConsumed(true);
		}
	}, [context, snake, target]);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [bannedMove, handleKeyPress]);

	return (
		<canvas
			ref={canvasRef}
			width={width}
			height={height}
			className="rounded-md bg-slate-300 shadow-md shadow-emerald-500"
		/>
	);
};

export default Canvas;
