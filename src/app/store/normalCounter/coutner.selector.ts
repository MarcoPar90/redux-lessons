import { RootReducer } from "..";

export const selectOldCounter = (state: RootReducer) => state.oldCounter.count;