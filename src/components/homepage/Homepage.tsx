import React, { useState } from "react";
import { useAppSelector } from "../../redux/store";
import { allFilmsSendType } from "../../interfaces/Interfaces";
import FilmFilters from "./filters/FilmFilters";
import CardsList from "../filmCards/CardsList";
import PaginationCards from "./pagination/Pagination";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

const Homepage: React.FC = () => {

	const [params, setParams] = useState<allFilmsSendType>({ page: 1, limit: 50 });
	const allFilms = useAppSelector((state) => state.getAllFilms);

	return (<Box component="main" sx={{display: "flex", gap: "50px", width: "100%", paddingTop: "40px", paddingBottom: "40px"}}>
		<FilmFilters params={params}/>
		{allFilms.loading ? <CircularProgress sx={{margin: "0 auto"}} /> : <Box>
			<CardsList isFav={false} data={allFilms}/>
			<PaginationCards params={params} setParams={setParams} pages={allFilms.pages}/>
		</Box>}
	</Box>);
};

export default Homepage;
