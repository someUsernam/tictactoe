import { describe, expect, it } from "vitest";
import { SquareSymbol } from "../../types";
import { checkWinner } from "../checkWinner";
import { player1 } from "./utils/createPlayer";
import { generateDrawSymbols } from "./utils/generateDrawSymbols";
import { generatePlayerSymbols } from "./utils/generatePlayerSymbols";

describe("checkWinner", () => {
	it("should return true if there is a winner ", () => {
		//given
		const size = 3;
		const squares = generatePlayerSymbols(size ** 2);

		//when
		const winner = checkWinner(squares, size);

		//then
		expect(winner).not.toBeNull();
	});

	it("should return false if there is no winner ", () => {
		//given
		const size = 3;
		const squares = generateDrawSymbols();

		//when
		const winner = checkWinner(squares, size);

		//then
		expect(winner).toBe(null);
	});

	it("should check for a horizontal winner", () => {
		//given
		const size = 3;
		const squares = [
			player1.symbol,
			player1.symbol,
			player1.symbol,
			null,
			null,
			null,
			null,
			null,
			null,
		];

		//when
		const winner = checkWinner(squares, size);

		//then
		expect(winner).toEqual({ symbol: player1.symbol, winningLine: [0, 1, 2] });
	});

	it("should check for a vertical winner", () => {
		//given
		const size = 3;
		const squares = [
			player1.symbol,
			null,
			null,
			player1.symbol,
			null,
			null,
			player1.symbol,
			null,
			null,
		];

		//when
		const winner = checkWinner(squares, size);

		//then
		expect(winner).toEqual({ symbol: player1.symbol, winningLine: [0, 3, 6] });
	});

	it("should check for a diagonal winner", () => {
		//given
		const size = 3;
		const squares = [
			player1.symbol,
			null,
			null,
			null,
			player1.symbol,
			null,
			null,
			null,
			player1.symbol,
		];

		//when
		const winner = checkWinner(squares, size);

		//then
		expect(winner).toEqual({ symbol: player1.symbol, winningLine: [0, 4, 8] });
	});

	it("should throw an error if the squares size is invalid", () => {
		//given
		const size = 3;
		const squares = [player1.symbol, null, null];

		expect(
			() =>
				//when
				checkWinner(squares, size),
			//then
		).toThrowError("Invalid squares size");
	});

	it("should throw an error if the board size is invalid", () => {
		//given
		const size = 2;
		const squares = [player1.symbol, player1.symbol, null, null];

		expect(
			() =>
				//when
				checkWinner(squares, size),
			//then
		).toThrowError("Invalid board size");
	});

	it("should return null if there is no squares", () => {
		//given
		const size = 0;
		const squares: SquareSymbol[] = [];

		//when
		const winner = checkWinner(squares, size);

		//then
		expect(winner).toBe(null);
	});

	it("should not throw if there is 1 Mil squares ", () => {
		//given
		const size = 1000;
		const squares = new Array(size ** 2).fill(player1.symbol);

		//when
		const winner = checkWinner(squares, size);

		//then
		expect(winner).not.toBeNull();
	});
});