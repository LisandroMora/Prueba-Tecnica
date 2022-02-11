import Banner from "@components/Banner/Index";
import Table from "@components/Table/Index";
import { endPoints } from "@utils/endPoints";
const https = require("https");
const agent = new https.Agent({
	rejectUnauthorized: false
});

function index({ table }) {
	return (
		<div>
			<Banner />
			<Table table={table} />
		</div>
	);
}

export default index;

export async function getServerSideProps() {
	const res = await fetch(endPoints.books(), {
		agent,
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
	if (!res.ok) throw new Error(res);
	const data = await res.json();
	return { props: { table: data } };
}

