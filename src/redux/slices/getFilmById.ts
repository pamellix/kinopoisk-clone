import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as Inter from "../../interfaces/Interfaces";
import { app } from "../../utils/AxiosConfig";
import axios from "axios";

const clearPage: Inter.filmById = {
	type: "",
	description: null,
	id: 0,
	name: null,
	alternativeName: "",
	rating: {
		kp: 0
	},
	poster: {
		url: "",
		previewUrl: ""
	},
	year: 0,
	loading: false
};

const initialState: Inter.filmById = clearPage;

export const fetchGetFilmById = createAsyncThunk<Inter.filmById, string, { rejectValue: string }>(
	"films/getFilmById",
	async (data: string, { rejectWithValue }) => {

		try {
			const URL = `${process.env.REACT_APP_GET_ALL_FILMS}/${data}`;
			console.log(URL);
			const response = await app.get<Inter.filmById>(URL);


			console.log(response);
			return response.data;
		} catch
		(error: unknown) {
			if (error instanceof axios.AxiosError) {
				return rejectWithValue(error.message);
			}
			throw error;
		}
	}
);

const getFilmById = createSlice({
	name: "getFilmById",
	initialState,
	reducers: {
		initPage: (state) => {
			return state = clearPage;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchGetFilmById.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchGetFilmById.fulfilled, (state, action) => {
			state = action.payload;
			state.loading = false;
			return state;
		});
		builder.addCase(fetchGetFilmById.rejected, (state) => {
			state.loading = false;
			return state;
		});
	},
});

export const {initPage} = getFilmById.actions;
export default getFilmById.reducer;
