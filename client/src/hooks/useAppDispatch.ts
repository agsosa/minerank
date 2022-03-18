import { useDispatch } from "react-redux";
import type { StoreDispatch } from "src/types/store.types";

export const useAppDispatch = () => useDispatch<StoreDispatch>();
