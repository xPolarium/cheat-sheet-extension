import { useEffect, useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { Dashboard } from "./components/Dashboard";

function App() {
	const [pages, setPages] = useState([]);

	let isLoggedIn = true;

	return (
		<div className="w-[300px] h-[500px] bg-red-400 overflow-hidden">
			<div className="flex flex-col items-center bg-neutral-300 text-neutral-800 px-2 h-full text-sm">
				<div className="my-2 text-2xl font-bold uppercase">
					Cheatsheet
				</div>

				{isLoggedIn ? <LoginScreen /> : <Dashboard />}
			</div>
		</div>
	);
}

export default App;
