import Canvas from './components/canvas';
import Navbar from './components/navbar';

function App() {
	return (
		<div className="flex h-screen w-full flex-col items-center">
			<Navbar />
			<div className="flex flex-1 items-center justify-center">
				<Canvas width={900} height={600} />
			</div>
		</div>
	);
}

export default App;
