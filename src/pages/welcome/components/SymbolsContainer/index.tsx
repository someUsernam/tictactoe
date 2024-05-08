import Circle from "@/common/components/Circle";
import Cross from "@/common/components/Cross";
import styled from "styled-components";
import { useTicTacToeEffect } from "../../hooks/useTicTacToeEffect";

const StyledSvg = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
`;

const Symbols = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  grid-auto-rows: 24px;
  gap: 1rem;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function SymbolsContainer() {
	const { symbolsRef } = useTicTacToeEffect<HTMLDivElement>();

	return (
		<StyledSvg>
			<Symbols ref={symbolsRef}>
				{Array.from({ length: 70 }, (_, i) =>
					Math.random() > 0.5 ? (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Cross key={i} size={24} color="var(--primary)" />
					) : (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Circle key={i} size={24} color="var(--primary)" />
					),
				)}
			</Symbols>
			<Cross size={300} color="var(--primary)" />
			<Circle size={270} color="var(--primary)" />
		</StyledSvg>
	);
}
export default SymbolsContainer;
