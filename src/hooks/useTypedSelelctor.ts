import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../stor/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
