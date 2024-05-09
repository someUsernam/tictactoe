import { Button } from "@/common/components/Button";

type ResetButtonProps = {
	handleReset: () => void;
};

function GameReset({ handleReset }: ResetButtonProps) {
	return (
		<Button type="button" onClick={handleReset}>
			reset
		</Button>
	);
}
export default GameReset;
