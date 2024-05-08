import { useEffect, useRef } from "react";

const SECOND = 1000;
const MILISECOND = 100;

export function useTicTacToeEffect<T extends HTMLElement>(
	timeoutDuration = SECOND,
	intervalDuration = MILISECOND,
) {
	const symbolsRef = useRef<T>(null);

	useEffect(() => {
		if (!symbolsRef.current) return;
		let timeoutID: ReturnType<typeof setTimeout>;
		const symbols = symbolsRef.current;
		if (symbols) {
			const children = Array.from(symbols.children);
			const intervalID = setInterval(() => {
				const randomIndex = Math.floor(Math.random() * children.length);
				const randomChild = children[randomIndex] as HTMLElement;
				randomChild.style.opacity = "0";
				timeoutID = setTimeout(() => {
					randomChild.style.opacity = "1";
				}, timeoutDuration);
			}, intervalDuration);

			return () => {
				clearInterval(intervalID);
				clearTimeout(timeoutID);
			};
		}
	}, [timeoutDuration, intervalDuration]);

	return { symbolsRef };
}
