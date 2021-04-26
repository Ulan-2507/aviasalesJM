import { FilterActionTypes, FilterActions } from "../../types/filter";

import { resetListLength } from "../action-creators/tickets";

import store from "../../stor";

export const AllAction = (): FilterActions => {
  store.dispatch(resetListLength());
  return { type: FilterActionTypes.ALL };
};
export const WithoutTransferAction = (): FilterActions => {
  store.dispatch(resetListLength());
  return { type: FilterActionTypes.WITHOUT_TRANSFER };
};
export const OneTransferAction = (): FilterActions => {
  store.dispatch(resetListLength());
  return { type: FilterActionTypes.ONE_TRANSFER };
};
export const TwoTransferAction = (): FilterActions => {
  store.dispatch(resetListLength());
  return { type: FilterActionTypes.TWO_TRANSFER };
};
export const ThreeTransferAction = (): FilterActions => {
  store.dispatch(resetListLength());
  return { type: FilterActionTypes.THREE_TRANSFER };
};
export const OpenAction = (): FilterActions => {
  return { type: FilterActionTypes.IS_OPEN };
};
