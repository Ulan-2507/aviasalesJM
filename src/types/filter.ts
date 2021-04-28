
export interface FilterState {
  isOpen: boolean;
  all: boolean;
  withoutTransfers: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
}

export enum FilterActionTypes {
  IS_OPEN = "IS_OPEN",
  ALL = "ALL",
  WITHOUT_TRANSFER = "WITHOUT_TRANSFER",
  ONE_TRANSFER = "ONE_TRANSFER",
  TWO_TRANSFER = "TWO_TRANSFER",
  THREE_TRANSFER = "THREE_TRANSFER",
}

type IsOpenAction = {
  type: FilterActionTypes.IS_OPEN;
}
type AllAction = {
  type: FilterActionTypes.ALL;
}
type WithoutTransferAction = {
  type: FilterActionTypes.WITHOUT_TRANSFER;
}
type OneTransferAction = {
  type: FilterActionTypes.ONE_TRANSFER;
}
type TwoTransferAction = {
  type: FilterActionTypes.TWO_TRANSFER;
}
type ThreeTransferAction = {
  type: FilterActionTypes.THREE_TRANSFER;
}

export type FilterActions =
  | AllAction
  | WithoutTransferAction
  | OneTransferAction
  | TwoTransferAction
  | ThreeTransferAction
  | IsOpenAction;
