import { useOrderedPlayers } from "@/resources/players";
import styled from "styled-components";
import GamePlayersItem from "./components/GamePlayersItem";

const StyledGamePlayersList = styled.ul`
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		width: 100%;
	`;

function GamePlayers() {
	const orderedPlayers = useOrderedPlayers();

	return (
		<StyledGamePlayersList>
			{orderedPlayers.map((player) => (
				<GamePlayersItem key={player.id} player={player} />
			))}
		</StyledGamePlayersList>
	);
}
export default GamePlayers;
