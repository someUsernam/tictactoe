import { ComponentProps } from "react";
import styled from "styled-components";

type CircleProps = {
	size?: number;
	color?: string;
	strokeWidth?: number;
} & ComponentProps<"svg">;

const StyledSvg = styled.svg<CircleProps>`
	width: ${({ size }) => size ?? 24}px;
	height: ${({ size }) => size ?? 24}px;
	stroke-width: ${({ strokeWidth }) => strokeWidth ?? 2};
	color: ${({ color }) => color ?? "currentColor"};
`;

function Circle({ size, color, strokeWidth, ...props }: CircleProps) {
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
			<title>Circle</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</StyledSvg>
	);
}
export default Circle;
