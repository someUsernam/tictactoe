import { links } from "@/common/consts/Links";
import { PlayerSymbol } from "@/resources/players";
import { setIsGameStarted, setSize } from "@/store/optionsSlice";
import { setPlayer } from "@/store/playerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export function useGameSetupForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleStartGame(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const size = formData.get("size") as string;

		Array.from({ length: 2 }, (_, i) => {
			const playerName = formData.get(`Player${i + 1}Name`) as string;
			const playerId = `player${i + 1}`;

			dispatch(
				setPlayer({
					playerId,
					player: {
						id: playerId,
						name: playerName,
						score: 0,
						symbol: i === 0 ? PlayerSymbol.Cross : PlayerSymbol.Circle,
					},
				}),
			);
		});

		dispatch(setIsGameStarted(true));
		dispatch(setSize(Number(size)));
		navigate(links.game);
	}

	return { handleStartGame };
}
