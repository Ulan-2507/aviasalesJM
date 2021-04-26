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

interface IsOpenAction {
  type: FilterActionTypes.IS_OPEN;
}
interface AllAction {
  type: FilterActionTypes.ALL;
}
interface WithoutTransferAction {
  type: FilterActionTypes.WITHOUT_TRANSFER;
}
interface OneTransferAction {
  type: FilterActionTypes.ONE_TRANSFER;
}
interface TwoTransferAction {
  type: FilterActionTypes.TWO_TRANSFER;
}
interface ThreeTransferAction {
  type: FilterActionTypes.THREE_TRANSFER;
}

export type FilterActions =
  | AllAction
  | WithoutTransferAction
  | OneTransferAction
  | TwoTransferAction
  | ThreeTransferAction
  | IsOpenAction;
