import { createWrapper, Context } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { Store } from "src/types/store.types";
import { reducer as community } from "./community";
import { reducer as gamemode } from "./gamemode";

const combinedReducers = combineReducers({ community, gamemode });

export const makeStore = (context: Context) =>
  configureStore({
    reducer: combinedReducers,
  });

export const storeWrapper = createWrapper<Store>(makeStore, { debug: false });
