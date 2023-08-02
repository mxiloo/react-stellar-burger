import {createAsyncThunk} from "@reduxjs/toolkit";
import {getIngredients} from "../../utils/api";

export const fetchIngredients = createAsyncThunk('items/get', getIngredients);




