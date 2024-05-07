import { useSize } from "@/store/optionsSlice";
import styled from "styled-components";
import { Square } from "./components/Square";

const StyledBoard = styled.div`
  display: flex;
`;

function Board() {
	const size = useSize();

	return (
		<StyledBoard>
			{Array.from({ length: size }, (_, i) => (
				<div key={i}>
					{Array.from({ length: size }, (_, j) => (
						<Square key={j} />
					))}
				</div>
			))}
		</StyledBoard>
	);
}
export { Board };
