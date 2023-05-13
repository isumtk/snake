import { useEffect, useRef, useState } from 'react';
import { COORDINATE } from '../../utils/utils.types';
import { clearCanvas } from '../../utils';

interface CanvasProps {
	height: number;
	width: number;
}

const Canvas: React.FC<CanvasProps> = ({ height, width }) => {
	// Board Variables
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
	// Game Variables
	const [isCollided, setIsCollided] = useState<boolean>(false);
	const [isConsumed, setIsConsumed] = useState<boolean>(false);
	const [target, setTarget] = useState<COORDINATE>();

	// useEffect to redraw the snake whenever it changes position
	useEffect(() => {
		setContext(canvasRef.current && canvasRef.current.getContext('2d'));
		clearCanvas(context, width, height);
	}, [context]);

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
