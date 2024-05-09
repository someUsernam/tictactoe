import { Player } from "@/resources/players";
import styled from "styled-components";
import { SquareSymbol } from "../../types";
import GameMovesHistory from "./components/GameMovesHistory";
import GamePlayers from "./components/GamePlayers";
import GameReset from "./components/GameReset";
import GameStatus from "./components/GameStatus";

const StyledSidebar = styled.aside`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: var(--elevated);
  border-radius: var(--radius);
  padding: 1rem;
  justify-content: space-between;
  outline: 4px dashed var(--primary);
	gap: 1rem;
	max-width: 300px;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

type SidebarProps = {
	handleMoveTo: (move: number) => void;
	history: SquareSymbol[][];
	handleReset: () => void;
	currentWinner: string;
	currentPlayer: Player;
};

function Sidebar({
	handleMoveTo,
	history,
	handleReset,
	currentWinner,
	currentPlayer,
}: SidebarProps) {
	return (
		<StyledSidebar>
			<StyledContainer>
				<GamePlayers />
				<GameStatus
					currentWinner={currentWinner}
					currentPlayer={currentPlayer}
				/>
				<GameMovesHistory handleMoveTo={handleMoveTo} history={history} />
			</StyledContainer>
			<GameReset handleReset={handleReset} />
		</StyledSidebar>
	);
}
export default Sidebar;
