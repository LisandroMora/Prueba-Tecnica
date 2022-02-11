import { endPoints } from "@utils/endPoints";
const https = require("https");
const agent = new https.Agent({
	rejectUnauthorized: false
});


async function bookService(id) {
	const res = await fetch(endPoints.books(id), {
		agent,
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
	if (!res.ok) throw new Error(res);
	const data = await res.json();
	return { books: data };
}

export default bookService;
