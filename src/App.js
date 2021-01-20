import HelloReact from "./HelloReact";
import "./App.css";
import PhotoGallery from "./PhotoGallery";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Hello, React!</h1>
				<PhotoGallery />
				{/* <img src="/logo192.png" alt="React logo" /> */}
				{/* This good Syntax for injecting images*/}

				<p className="message">Wow! That's so coool!</p>

				<HelloReact />
			</header>
		</div>
	);
}

export default App;
