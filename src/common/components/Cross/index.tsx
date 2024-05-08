import { ComponentProps } from "react";
import styled from "styled-components";

type CrossProps = {
	size?: number;
	color?: string;
	strokeWidth?: number;
} & ComponentProps<"svg">;

const StyledSvg = styled.svg<CrossProps>`
	width: ${({ size }) => size ?? 24}px;
	height: ${({ size }) => size ?? 24}px;
	stroke-width: ${({ strokeWidth }) => strokeWidth ?? 2};
	color: ${({ color }) => color ?? "currentColor"};
`;

function Cross({ size, color, strokeWidth, ...props }: CrossProps) {
	return (
		<StyledSvg
			size={size}
			color={color}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			{...props}
		>
			<title>Cross</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18 18 6M6 6l12 12"
			/>
		</StyledSvg>
	);
}
export default Cross;
