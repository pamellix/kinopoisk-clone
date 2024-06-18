import React from "react";
import { Box, Grid } from "@mui/material";
import FilmCard from "./FilmCard";
import { allCardsHomePage, cardHomePage } from "../../interfaces/Interfaces";

interface Props {
  data: allCardsHomePage | Array<cardHomePage | null>;
  isFav: boolean;
}

const CardsList: React.FC<Props> = ({ data, isFav }) => {
	const items = "docs" in data ? data.docs.map((item) => (
		<Grid key={item.id} item xs={4}>
			<FilmCard card={item} isFav={isFav}></FilmCard>
		</Grid>)) : data.map((item) => (
		<Grid key={item?.id} item xs={4}>
			<FilmCard card={item} isFav={isFav}></FilmCard>
		</Grid>));

	return (
		<Box>
			<Grid container spacing={2}>
				{items}
			</Grid>
		</Box>
	);
};

export default CardsList;
