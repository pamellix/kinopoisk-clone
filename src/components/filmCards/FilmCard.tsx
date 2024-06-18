import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button, CardActions, Tooltip } from "@mui/material";
import { useAppDispatch } from "../../redux/store";
import { addToFav, removeFromFav } from "../../redux/slices/favouriteFilms";
import { cardHomePage } from "../../interfaces/Interfaces";
import { NavLink } from "react-router-dom";

interface Props {
	card: cardHomePage | null;
	isFav: boolean
}

const FilmCard: React.FC<Props> = ({ card, isFav }) => {

	const [fav, setFav] = useState(isFav);

	const dispatch = useAppDispatch();

	return (<div><Card sx={{ maxWidth: 345 }}>
		<NavLink to={`./${card?.id}`}>
			<CardMedia sx={{ height: 300 }} image={card?.poster?.previewUrl ?? ""} title="постер фильма" />
			<CardContent>
				<Tooltip title={card?.name ?? card?.alternativeName} enterDelay={0}>
					<Box sx={{ width: "220px" }}>
						<Typography sx={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",}} gutterBottom variant="h5" component="div" color="text.primary">
							{card?.name ?? card?.alternativeName}
						</Typography>
					</Box>
				</Tooltip>
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant="body2" color="text.secondary">
						Год выхода: {card?.year}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Рейтинг Кинопоиска: {card?.rating?.kp ?? 0}
					</Typography>
				</Box>
			</CardContent>
		</NavLink>
		<CardActions>
			{fav ?
				<Button size="small" onClick={() => {
					dispatch(removeFromFav(card?.id));
					setFav((prev) => !prev);}}>Убрать</Button> :
				<Button size="small" onClick={() => {
					dispatch(addToFav(card));
					setFav((prev) => !prev);}}>в Избранное</Button>
			}
		</CardActions>
	</Card>
	</div>);
};

export default FilmCard;
