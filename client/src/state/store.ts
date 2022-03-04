import { createWrapper, Context } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as community } from "./community";
import { Store } from "src/types/store.types";

const combinedReducers = combineReducers({ community });

export const makeStore = (context: Context) =>
  configureStore({
    reducer: combinedReducers,
  });

export const storeWrapper = createWrapper<Store>(makeStore, { debug: true });
