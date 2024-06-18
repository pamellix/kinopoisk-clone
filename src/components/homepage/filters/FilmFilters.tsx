import React, { useEffect } from "react";
import GenreFilter from "./GenreFilter";
import DoubleRange from "./DoubleRange";
import { Box, Button } from "@mui/material";
import { fetchGetAllFilms } from "../../../redux/slices/getAllFilms";
import { useAppDispatch } from "../../../redux/store";
import { allFilmsSendType } from "../../../interfaces/Interfaces";

interface Props {
  params: allFilmsSendType;
}

const FilmFilters: React.FC<Props> = ({params}) => {

	const dispatch = useAppDispatch();

	const [genreName, setGenreName] = React.useState<string[]>([]);
	const [rating, setRating] = React.useState<number[]>([1, 10]);
	const [year, setYear] = React.useState<number[]>([1990, 2024]);
	async function loadData(): Promise<void> {
		await dispatch(fetchGetAllFilms({
			page: params.page,
			limit: params.limit,
			"genre.name": genreName,
			"rating.kp": `${rating[0]}-${rating[1]}`,
			year: `${year[0]}-${year[1]}`
		}));
	}

	useEffect(() => {
		loadData();
	}, [params]);

	return (<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px",marginTop: "20px" }}>
		<GenreFilter genreName={genreName} setGenreName={setGenreName} />
		<DoubleRange state={rating} setState={setRating} minDist={0.1} min={1} max={10} name={"Рейтинг"} />
		<DoubleRange state={year} setState={setYear} minDist={1} min={1990} max={2024} name={"Год"} />
		<Button onClick={() => loadData()} variant="outlined">Найти</Button>
	</Box>);
};

export default FilmFilters;