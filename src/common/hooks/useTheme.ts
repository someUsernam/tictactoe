import { useLocalStorage } from "./useLocalStorage";

export function useTheme() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	const [theme, setTheme] = useLocalStorage(
		"theme",
		defaultDark ? "dark" : "light",
	);

	const handleChangeTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";

		setTheme(newTheme);
	};

	return { theme, handleChangeTheme };
}
