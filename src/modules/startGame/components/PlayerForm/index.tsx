import { setPlayer } from "@store/playerSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
`;

function PlayerForm() {
	const dispatch = useDispatch();

	function handleStartGame(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const player1Name = formData.get("Player1Name") as string;
		const player2Name = formData.get("Player2Name") as string;

		dispatch(
			setPlayer({
				playerId: "player1",
				player: { name: player1Name, score: 0 },
			}),
		);
		dispatch(
			setPlayer({
				playerId: "player2",
				player: { name: player2Name, score: 0 },
			}),
		);
	}

	return (
		<form onSubmit={handleStartGame} action="">
			<label htmlFor="Player1Name">Player 1 name</label>
			<Input type="text" required name="Player1Name" placeholder="Player 1" />
			<label htmlFor="Player2Name">Player 2 name</label>
			<Input type="text" required name="Player2Name" placeholder="Player 2" />
			<button type="submit">Start game</button>
		</form>
	);
}
export { PlayerForm };
