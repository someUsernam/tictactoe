import { setIsGameStarted, setSize, useSize } from "@/store/optionsSlice";
import { useDispatch } from "react-redux";

function SetGameOptions() {
	const size = useSize();
	const dispatch = useDispatch();

	function handleStartGame(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const size = formData.get("size") as string;
		dispatch(setSize(Number(size)));
		dispatch(setIsGameStarted(true));
	}

	return (
		<div>
			<ul>
				<li>size: {size}</li>
			</ul>
			<form onSubmit={handleStartGame}>
				<label htmlFor="size">Size</label>
				<input
					type="number"
					id="size"
					name="size"
					step={1}
					defaultValue={size}
				/>
				<button type="submit">Start Game</button>
			</form>
		</div>
	);
}
export { SetGameOptions };
