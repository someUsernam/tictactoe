import { links } from "@/common/consts/Links";
import { useSize } from "@/resources/options/hooks";
import { setIsGameStarted, setSize } from "@/store/optionsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function GameOptions() {
	const size = useSize();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleStartGame(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const size = formData.get("size") as string;
		dispatch(setSize(Number(size)));

		navigate(links.players);
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
export { GameOptions };
