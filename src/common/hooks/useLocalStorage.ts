import { useEffect, useState } from "react";

export function useLocalStorage(key: string, defaultValue: unknown) {
	const [value, setValue] = useState(() => {
		const storedValue = localStorage.getItem(key);

		return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
