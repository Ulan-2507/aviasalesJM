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
        withoutTransfers: !state.all,
        oneTransfer: !state.all,
        twoTransfer: !state.all,
        threeTransfer: !state.all,
      };
    case FilterActionTypes.WITHOUT_TRANSFER:
      return {
        ...state,
        all:
          stateLength === 3 && !state.withoutTransfers,
        withoutTransfers: !state.withoutTransfers,
      };
    case FilterActionTypes.ONE_TRANSFER:
      return {
        ...state,
        all: stateLength === 3 && !state.oneTransfer,
        oneTransfer: !state.oneTransfer,
      };
    case FilterActionTypes.TWO_TRANSFER:
      return {
        ...state,
        all: stateLength === 3 && !state.twoTransfer,
        twoTransfer: !state.twoTransfer,
      };
    case FilterActionTypes.THREE_TRANSFER:
      return {
        ...state,
        all: stateLength === 3 && !state.threeTransfer,
        threeTransfer: !state.threeTransfer,
      };
    default:
      return state;
  }
};
