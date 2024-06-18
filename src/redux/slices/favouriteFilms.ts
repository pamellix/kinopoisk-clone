import { createSlice } from "@reduxjs/toolkit";
import { cardHomePage } from "../../interfaces/Interfaces";

const initialState: Array<cardHomePage | null> = [];

const favouriteFilms = createSlice({
	name: "favouritesFilms",
	initialState,
	reducers: {
		addToFav: (state, action) => {
			state.push(action.payload);
		},
		removeFromFav: (state, action) => {
			return state = state.filter((item) => item?.id !== action.payload);
		}
	},
});

export const { addToFav, removeFromFav } = favouriteFilms.actions;
export default favouriteFilms.reducer;
