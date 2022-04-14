import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "../store/store";

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
