import { Player, usePlayers } from "@/resources/players";
import styled from "styled-components";
import { SYMBOL_SVG_MAP } from "../../utils/symbolSvgMap";

type GamePlayersItemProps = {
	player: Player;
};

const StyledGamePlayersItem = styled.li`
	list-style: none;
	padding: 0.5rem;
	border-radius: var(--radius);
	outline: 2px solid var(--primary);
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	background-color: var(--primary);
	color: var(--text-foreground);
	font-weight: 800;
	font-size: var(--font-size-large);
`;

const StyledGamePlayerSymbol = styled.div`
	background-color: var(--secondary);
	color: var(--primary);
	border-radius: 50%;
	line-height: 0;
	padding: 0.5rem;
	width: max-content;
`;

const StyledGamePlayerName = styled.div`
	font-size: var(--font-size-medium);
	max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledGamePlayerScore = styled.div`
	font-size: var(--font-size-medium);
	background-color: var(--elevated);
	padding: 0.5rem;
	border-radius: var(--radius);
	color: var(--text);
`;

const StyledGamePlayerInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

function GamePlayersItem({ player }: GamePlayersItemProps) {
	const players = usePlayers();

	return (
		<StyledGamePlayersItem>
			<StyledGamePlayerInfo>
				<StyledGamePlayerName>{players[player.id].name}</StyledGamePlayerName>
				<StyledGamePlayerSymbol>
					{SYMBOL_SVG_MAP.get(players[player.id].symbol)}
				</StyledGamePlayerSymbol>
			</StyledGamePlayerInfo>
			<StyledGamePlayerScore>
				Score: {players[player.id].score}
			</StyledGamePlayerScore>
		</StyledGamePlayersItem>
	);
}
export default GamePlayersItem;
