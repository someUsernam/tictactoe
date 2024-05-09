import { Button } from "@/common/components/Button";
import { useSize } from "@/resources/options";
import { Fragment } from "react";
import styled from "styled-components";
import { useGameSetupForm } from "./hooks/useGameSetupFrom";

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: var(--font-size-medium);
	font: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	border-radius: var(--radius);
	border: none;
	background-color: var(--neutral);
	&::placeholder {
		color: color-mix(in oklch, var(--text), var(--neutral));
	}
`;

const StyledForm = styled.form`
	display: flex;
	text-align: left;
	flex-direction: column;
	gap: 0.4rem;
	color: var(--text);
`;

function GameSetupForm() {
	const size = useSize();
	const { handleStartGame } = useGameSetupForm();

	return (
		<StyledForm onSubmit={handleStartGame}>
			{Array.from({ length: 2 }, (_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<Fragment key={i}>
					<label htmlFor={`Player${i + 1}Name`}>Player {i + 1} name</label>
					<Input
						type="text"
						required
						name={`Player${i + 1}Name`}
						placeholder={`Player ${i + 1}`}
						minLength={1}
						maxLength={20}
						pattern="\S+.*"
					/>
				</Fragment>
			))}
			<label htmlFor="size">Size:</label>
			<Input
				type="number"
				id="size"
				name="size"
				step={1}
				min={3}
				required
				defaultValue={size}
			/>
			<Button type="submit">Start Game</Button>
		</StyledForm>
	);
}

export default GameSetupForm;
