import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type ButtonProps = {
	type?: ComponentProps<"button">["type"];
	size?: "small" | "medium" | "large";
	href?: string;
} & ComponentProps<"button">;

const StyledButton = styled.button<ButtonProps>`
  background-color: var(--secondary);
  color:  var(--primary);
  border: none;
  padding: var(--padding-small) var(--padding-medium);
  cursor: pointer;
  border-radius: var(--radius);
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;

  ${({ size }) => {
		if (size === "small")
			return `
      font-size: var(--font-size-small);
      padding: var(--padding-small) var(--padding-medium);
    `;
		if (size === "medium")
			return `
      font-size: var(--font-size-medium);
      padding: var(--padding-medium) var(--padding-large);
    `;
		if (size === "large")
			return `
      font-size: var(--font-size-large);
      padding: var(--padding-large) var(--padding-xlarge);
    `;
	}}

  &:hover {
    background-color: var(--primary);
    color: var(--secondary);
  }
`;

function Button({
	children,
	type = "button",
	size = "medium",
	href,
	...props
}: ButtonProps) {
	if (href) {
		return (
			<Link to={href}>
				<StyledButton type={type} size={size} {...props}>
					{children}
				</StyledButton>
			</Link>
		);
	}

	return (
		<StyledButton type={type} size={size} {...props}>
			{children}
		</StyledButton>
	);
}

export { Button };
