import { PageButton } from "./PageButton";

export const Dashboard = () => {
	return (
		<div>
			<ul className="flex justify-center items-center flex-wrap gap-1">
				<li>
					<PageButton />
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

						<div className="truncate">Save and close the file.</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
