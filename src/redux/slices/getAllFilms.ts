import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as Inter from "../../interfaces/Interfaces";
import { app } from "../../utils/AxiosConfig";
import axios from "axios";

const initialState: Inter.allCardsHomePage = {
	docs: [
		{
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
			year: 0
		}
	],
	limit: 0,
	page: 0,
	pages: 0,
	total: 0,
	loading: false
};

export const fetchGetAllFilms = createAsyncThunk<Inter.allCardsHomePage, Inter.allFilmsSendType, { rejectValue: string }>(
	"films/getAllFilms",
	async (data: Inter.allFilmsSendType, { rejectWithValue }) => {

		function createParams() {
			let param = `?page=${data.page}&limit=${data.limit}&rating.kp=${data["rating.kp"]}&year=${data.year}`;

			if (data["genre.name"]) {
				data["genre.name"].forEach((genre) => {
					param += `&genres.name=${encodeURIComponent(genre.toLowerCase())}`;
				});
			}
			return param;
		}

		try {
			const URL = `${process.env.REACT_APP_GET_ALL_FILMS}${createParams()}`;
			console.log(URL);
			const response = await app.get<Inter.allCardsHomePage>(URL);


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

const getAllFilms = createSlice({
	name: "getAllFilms",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGetAllFilms.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchGetAllFilms.fulfilled, (state, action) => {
			state = action.payload;
			state.loading = false;
			return state;
		});
		builder.addCase(fetchGetAllFilms.rejected, (state) => {
			state.loading = false;
			return state;
		});
	},
});

export default getAllFilms.reducer;
