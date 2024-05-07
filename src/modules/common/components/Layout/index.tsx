import { Outlet } from "react-router";
import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family);
`;

function Layout() {
	return (
		<StyledLayout>
			<Outlet />
		</StyledLayout>
	);
}
export default Layout;
