import { useTheme } from "@/common/hooks/useTheme";
import { Outlet } from "react-router";
import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
`;

const ThemeSwitcher = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: var(--radius);
  background-color: var(--elevated);
  font-weight: bold;
  border: 0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primary);
  }
`;

function Layout() {
	const { theme, handleChangeTheme } = useTheme();

	return (
		<StyledLayout data-theme={theme}>
			<ThemeSwitcher type="button" onClick={handleChangeTheme}>
				{theme === "light" ? "🌞" : "🌜"}
			</ThemeSwitcher>
			<Outlet />
		</StyledLayout>
	);
}
export default Layout;
