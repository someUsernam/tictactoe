import { describe, expect, it } from "vitest";
import { SquareSymbol } from "../../types";
import { checkDraw } from "../checkDraw";
import { generateDrawSymbols } from "./utils/generateDrawSymbols";
import { generatePlayerSymbols } from "./utils/generatePlayerSymbols";
import { generatePlayerSymbolsWithNull } from "./utils/generatePlayerSymbolsWithNull";

describe("checkDraw", () => {
	it("should return true if there is no winner and all squares are filled", () => {
		//given
		const isWinner = false;

		//when
		const squares = generateDrawSymbols();

		//then
		expect(checkDraw(isWinner, squares)).toBe(true);
	});

	it("should return false if there is no winner and not all squares are filled", () => {
		//given
		const isWinner = false;

		//when
		const squares = generatePlayerSymbolsWithNull(4);

		//then
		expect(checkDraw(isWinner, squares)).toBe(false);
	});

	it("should return false if there is winner and all squares are filled", () => {
		//given
		const isWinner = true;

		//when
		const squares = generatePlayerSymbols(4);

		//then
		expect(checkDraw(isWinner, squares)).toBe(false);
	});

	it("should return false if there is winner and not all squares are filled", () => {
		//given
		const isWinner = true;

		//when
		const squares = generatePlayerSymbolsWithNull(4);

		//then
		expect(checkDraw(isWinner, squares)).toBe(false);
	});

	it("should return false if there is no squares", () => {
		//given
		const isWinner = false;

		//when
		const squares: SquareSymbol[] = [];

		//then
		expect(checkDraw(isWinner, squares)).toBe(false);
	});

	it("should not throw if there is 10 Mil squares ", () => {
		//given
		const isWinner = false;

		//when
		const squares = generatePlayerSymbols(10000000);

		//then
		expect(() => checkDraw(isWinner, squares)).not.toThrow();
	});
});
