import React from "react";
import CardsList from "../filmCards/CardsList";
import { useAppSelector } from "../../redux/store";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const FavouriteFilms: React.FC = () => {

	const data = useAppSelector((state) => state.favouriteFilms);

	console.log(data);

	return (
		<Box sx={{paddingTop: "40px"}}>
			{data.length === 0 ?
				<Typography variant="h5">
					Нет избранных фильмов
				</Typography> :
				<CardsList data={data} isFav={true}/>
			}
		</Box>
	);
};

export default FavouriteFilms;