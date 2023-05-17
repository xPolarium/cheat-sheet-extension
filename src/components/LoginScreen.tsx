import { useState } from "react";

export const LoginScreen = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setUsername("");
		setPassword("");
	}

	return (
		<div className="w-full flex flex-col items-center">
			<div className="my-2 text-xl font-semibold">
				Log in or register.
			</div>

			<form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
				<div className="flex justify-between gap-2">
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						name="username"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
						id="username"
					/>
				</div>

				<div className="flex justify-between  gap-2">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						id="password"
					/>
				</div>

				<div className="flex justify-center gap-4 mt-4">
					<button
						type="submit"
						className="bg-neutral-100 shadow-md text-md p-1"
					>
						Login
					</button>
					<button className="bg-neutral-100 shadow-md text-md p-1">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};
