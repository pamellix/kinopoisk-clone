import React, { SetStateAction } from "react";
import { Box } from "@mui/system";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Pagination } from "@mui/material";
import { allFilmsSendType } from "../../../interfaces/Interfaces";

interface Props {
	params: allFilmsSendType;
	setParams: React.Dispatch<SetStateAction<allFilmsSendType>>;
	pages: number
}

const PaginationCards: React.FC<Props> = ({params, setParams, pages}) => {

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setParams({...params, page: value});
	};

	const handleAmount = (e: SelectChangeEvent<number>) => {
		setParams({...params, limit: Number(e.target.value)});
	};

	return (
		<Box sx={{marginTop: "25px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
			<Box sx={{ minWidth: 150 }}>
				<FormControl fullWidth>
					<InputLabel id='amount'> Кол-во карт</InputLabel>
					<Select labelId="amount" id="amount" value={params.limit} label="Amount" onChange={(e: SelectChangeEvent<number>) => handleAmount(e)}>
						<MenuItem value={"5"}>5</MenuItem>
						<MenuItem value={"10"}>10</MenuItem>
						<MenuItem value={"15"}>15</MenuItem>
						<MenuItem value={"20"}>20</MenuItem>
						<MenuItem value={"50"}>50</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box>
				<Pagination sx={{
					backgroundColor: "transparent",
					boxShadow: "none"
				}} count={pages} page={params.page} onChange={handleChange} shape="rounded" />
			</Box>
		</Box>
	);
};

export default PaginationCards;