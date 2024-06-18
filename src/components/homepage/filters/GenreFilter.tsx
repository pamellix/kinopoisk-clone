import React, { SetStateAction, useCallback } from "react";
import {
	Checkbox,
	FormControl,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const genres: string[] = [
	"Драма",
	"Комедия",
	"Боевик",
	"Фантастика",
	"Триллер",
	"Ужасы",
	"Приключения",
	"Детектив",
	"Криминал",
	"Мелодрама",
	"Военный",
	"Исторический",
	"Биография",
	"Мюзикл",
	"Семейный",
	"Анимация",
	"Фэнтези",
	"Документальный",
	"Спортивный",
];

interface Props {
  genreName: string[];
  setGenreName: React.Dispatch<SetStateAction<string[]>>;
}

const GenreFilter: React.FC<Props> = ({ genreName, setGenreName }) => {
	const handleGenreChange = useCallback((event: SelectChangeEvent<typeof genreName>) => {
		const {
			target: { value },
		} = event;
		setGenreName(typeof value === "string" ? value.split(",") : value);
	}, [setGenreName]);

	return (
		<FormControl sx={{ m: 1, width: 300 }}>
			<InputLabel id="genre-label">Жанр</InputLabel>
			<Select
				labelId="genre-label"
				id="genre-label"
				multiple
				value={genreName}
				onChange={handleGenreChange}
				input={<OutlinedInput label="Tag" />}
				renderValue={(selected) => selected.join(", ")}
				MenuProps={MenuProps}
			>
				{genres.map((name) => (
					<MenuItem key={name} value={name}>
						<Checkbox checked={genreName.indexOf(name) > -1} />
						<ListItemText primary={name} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default GenreFilter;
