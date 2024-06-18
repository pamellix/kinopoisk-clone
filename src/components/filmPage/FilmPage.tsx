import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchGetFilmById, initPage } from "../../redux/slices/getFilmById";
import { CircularProgress, Container, Grid, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const FilmPage: React.FC = () => {

	const dispatch = useAppDispatch();

	const params = useParams();
	const paramsSlug: string | undefined = params.slug;

	const data = useAppSelector((state) => state.getFilmById);

	async function loadData() {
		await dispatch(fetchGetFilmById(paramsSlug ?? ""));
	}

	useEffect(() => {
		loadData();

		return () => {
			dispatch(initPage());
		};
	}, []);

	return (<main>
		{data.loading ? <CircularProgress sx={{margin: "0 auto"}}/> : <Container maxWidth="lg" sx={{marginTop: "20px"}}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Card>
						<CardMedia component="img" height="800" image={data.poster?.url ?? ""} alt="Постер фильма" />
					</Card>
				</Grid>
				<Grid item xs={12} sm={6}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{data.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Жанр: {data.type}
						</Typography>
						<Typography gutterBottom variant="subtitle1" component="div">
							Год выхода: {data.year}
						</Typography>
						<Rating name="read-only" value={parseFloat((data.rating?.kp ?? 0).toFixed(1))} precision={0.1} max={10} readOnly />
						<Typography variant="body2" color="text.secondary">
							{data.description}
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</Container>}
	</main>);
};

export default FilmPage;