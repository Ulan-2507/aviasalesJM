import { FilterActionTypes, FilterActions } from "../../types/filter";

export const AllAction = (): FilterActions => ({ type: FilterActionTypes.ALL });
export const WithoutTransferAction = (): FilterActions => ({
  type: FilterActionTypes.WITHOUT_TRANSFER,
})
export const OneTransferAction = (): FilterActions => ({
  type: FilterActionTypes.ONE_TRANSFER,
})
export const TwoTransferAction = (): FilterActions => ({
  type: FilterActionTypes.TWO_TRANSFER,
})
export const ThreeTransferAction = (): FilterActions => ({
  type: FilterActionTypes.THREE_TRANSFER,
})
