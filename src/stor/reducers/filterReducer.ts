import {
  FilterState,
  FilterActionTypes,
  FilterActions,
} from "../../types/filter";

const initialState: FilterState = {
  isOpen: false,
  all: true,
  withoutTransfers: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
};

export const filterReducer = (
  state = initialState,
  action: FilterActions
): FilterState => {
  const stateLength: number = [
    state.all,
    state.oneTransfer,
    state.threeTransfer,
    state.twoTransfer,
    state.withoutTransfers,
  ].filter((i: boolean) => i === true).length;

  switch (action.type) {
    case FilterActionTypes.IS_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case FilterActionTypes.ALL:
      return {
        ...state,
        all: !state.all,
        withoutTransfers: !state.all ? true : false,
        oneTransfer: !state.all ? true : false,
        twoTransfer: !state.all ? true : false,
        threeTransfer: !state.all ? true : false,
      };
    case FilterActionTypes.WITHOUT_TRANSFER:
      return {
        ...state,
        all:
          stateLength === 3 && state.withoutTransfers === false ? true : false,
        withoutTransfers: !state.withoutTransfers,
      };
    case FilterActionTypes.ONE_TRANSFER:
      return {
        ...state,
        all: stateLength === 3 && state.oneTransfer === false ? true : false,
        oneTransfer: !state.oneTransfer,
      };
    case FilterActionTypes.TWO_TRANSFER:
      return {
        ...state,
        all: stateLength === 3 && state.twoTransfer === false ? true : false,
        twoTransfer: !state.twoTransfer,
      };
    case FilterActionTypes.THREE_TRANSFER:
      return {
        ...state,
        all: stateLength === 3 && state.threeTransfer === false ? true : false,
        threeTransfer: !state.threeTransfer,
      };
    default:
      return state;
  }
};
