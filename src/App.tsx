import Canvas from './components/canvas';
import Navbar from './components/navbar';
import { useSelector } from 'react-redux';
import { GLOBAL_STORE } from './redux/store.types';

function App() {
	const score = useSelector((state: GLOBAL_STORE) => state.score);

	return (
		<div className="flex h-screen w-full flex-col items-center">
			<Navbar />
			<div className="flex flex-1 flex-col items-center justify-center">
				<span className="mb-4 flex select-none items-center gap-2 font-sans text-lg">
					<p>Score : </p>
					<p>{score}</p>
				</span>
				<Canvas width={900} height={600} />
			</div>
		</div>
	);
}

export default App;
