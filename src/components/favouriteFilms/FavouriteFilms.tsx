import React from "react";
import CardsList from "../filmCards/CardsList";
import { useAppSelector } from "../../redux/store";
import { Box } from "@mui/material";

const FavouriteFilms: React.FC = () => {

	const data = useAppSelector((state) => state.favouriteFilms);

	return (
		<Box sx={{paddingTop: "40px"}}>
			<CardsList data={data} isFav={true}/>
		</Box>
	);
};

export default FavouriteFilms;