import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { StoreState } from "src/types/store.types";

export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
