import { selectIsGameStarted, selectSize } from "@/store/optionsSlice";
import { useSelector } from "react-redux";

export function useSize() {
	return useSelector(selectSize);
}

export function useIsGameStarted() {
	return useSelector(selectIsGameStarted);
}
