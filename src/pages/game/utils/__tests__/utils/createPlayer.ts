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

const player1 = createPlayer("1", "player1", PlayerSymbol.Cross, 0);
const player2 = createPlayer("2", "player2", PlayerSymbol.Circle, 0);

export { player1, player2 };
