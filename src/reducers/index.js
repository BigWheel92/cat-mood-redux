import { combineReducers } from "redux";
import {mood} from "./mood"

const reducer=combineReducers(
    {
    mood
    }
);
export {reducer};