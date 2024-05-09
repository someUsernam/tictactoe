import { Button } from "@/common/components/Button";
import styled from "styled-components";

type ResetButtonProps = {
	handleReset: () => void;
};

const StyledResetButton = styled(Button)`
  place-self: center;
`;

function ResetButton({ handleReset }: ResetButtonProps) {
	return (
		<StyledResetButton type="button" onClick={handleReset}>
			reset
		</StyledResetButton>
	);
}
export default ResetButton;
