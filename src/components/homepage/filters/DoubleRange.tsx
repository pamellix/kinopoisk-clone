import React, { useCallback } from "react";
import { FormControl, Slider, Typography } from "@mui/material";

interface Props {
  state: number[];
  setState: React.Dispatch<React.SetStateAction<number[]>>;
  minDist: number;
  min: number;
  max: number;
  name: string;
}

const DoubleRange: React.FC<Props> = ({ state, setState, minDist, min, max, name }) => {
	const minDistance = minDist;

	const handleRating = useCallback((event: Event, newValue: number | number[], activeThumb: number) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (newValue[1] - newValue[0] < minDistance) {
			if (activeThumb === 0) {
				const clamped = Math.min(newValue[0], max - minDistance);
				setState([clamped, clamped + minDistance]);
			} else {
				const clamped = Math.max(newValue[1], min + minDistance);
				setState([clamped - minDistance, clamped]);
			}
		} else {
			setState(newValue as number[]);
		}
	}, [setState, minDistance, min, max]);

	return (
		<FormControl sx={{ width: 300 }}>
			<Typography>{name}</Typography>
			<Typography variant="subtitle1">от {state[0]} до {state[1]}</Typography>
			<Slider
				getAriaLabel={() => "Minimum distance shift"}
				value={state}
				onChange={handleRating}
				valueLabelDisplay="auto"
				getAriaValueText={(value: number) => `${value}`}
				disableSwap
				min={min}
				max={max}
				step={minDist}
			/>
		</FormControl>
	);
};

export default DoubleRange;
