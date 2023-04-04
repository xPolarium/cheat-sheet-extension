function App() {
	return (
		<div className="w-[300px] h-[500px] bg-red-400 overflow-hidden">
			<div className="flex flex-col items-center bg-neutral-300 text-neutral-800 px-2 h-full text-sm">
				<div className="my-2 text-2xl font-bold uppercase">
					Cheatsheet
				</div>
				<ul className="flex justify-center items-center flex-wrap gap-1">
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							Github
						</button>
					</li>
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							Tarkov
						</button>
					</li>
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							Excel
						</button>
					</li>
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							Neovim
						</button>
					</li>
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							StarCitizen
						</button>
					</li>
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							Github
						</button>
					</li>
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							Tarkov
						</button>
					</li>
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							Excel
						</button>
					</li>
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							Neovim
						</button>
					</li>

					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							Excel
						</button>
					</li>
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							Neovim
						</button>
					</li>
					<li>
						<button className="bg-neutral-100 shadow-md text-md px-1">
							StarCitizen
						</button>
					</li>
				</ul>

				<div className="mt-4 mb-2 flex items-center gap-2">
					<div className="text-md">Current Sheet:</div>
					<div className="bg-neutral-100 shadow-md text-md px-1">
						VSCode
					</div>
				</div>

				<div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-300">
					<ul className="space-y-2">
						<li className="flex items-center justify-between mr-2">
							<div className="flex mr-2 w-1/2 flex-wrap space-x-1 space-y-1 items-center justify-center">
								<div className="px-1 text-md bg-neutral-100">
									Shift
								</div>
								<div>+</div>
								<div className="px-1 text-md bg-neutral-100">
									Ctrl
								</div>
								<div>+</div>
								<div className="px-1 text-md bg-neutral-100">
									Alt
								</div>
								<div>+</div>
								<div className="px-1 text-md bg-neutral-100">
									Delete
								</div>
							</div>

							<div className="truncate">
								Save and close the file.
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
