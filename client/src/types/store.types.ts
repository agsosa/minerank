import { makeStore } from "src/state/store";

export type Store = ReturnType<typeof makeStore>;
export type StoreState = ReturnType<Store["getState"]>;
export type StoreDispatch = any; // TODO
