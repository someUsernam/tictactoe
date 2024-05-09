import { Player } from "@/resources/players";

enum PlayerSymbol {
	Cross = "Cross",
	Circle = "Circle",
}

function createPlayer(
	id: string,
	name: string,
	symbol: PlayerSymbol,
	score: number,
): Player {
	return {
		id,
		name,
		symbol,
		score,
	};
}

const player1 = createPlayer("1", "john", PlayerSymbol.Cross, 0);
const player2 = createPlayer("2", "jane", PlayerSymbol.Circle, 0);

export { player1, player2 };
