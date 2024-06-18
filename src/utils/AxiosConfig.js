import axios from "axios";

// eslint-disable-next-line no-undef
const baseURL = `${process.env.REACT_APP_BASE_URL}`;
// eslint-disable-next-line no-undef
const token = `${process.env.REACT_APP_API_KEY}`;

console.log(token);

//"VCW0ANC-Q1H42BA-QVTJRHB-7NW5TNE"


export const app = axios.create({
	baseURL,
	headers: {
		"accept": "application/json",
		"X-API-KEY": token
	}
});