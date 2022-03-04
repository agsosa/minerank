import { createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { makeStore } from "src/state/store";

export type Store = ReturnType<typeof makeStore>;
export type StoreState = ReturnType<Store["getState"]>;
export type StoreDispatch = any; // TODO
export const hydrate = createAction<StoreState>(HYDRATE);
