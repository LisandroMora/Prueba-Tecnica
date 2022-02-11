const HOST_URL = `${process.env.PROTO}://${process.env.HOST_NAME}${`${process.env.PORT ? `:${process.env.PORT}` : ""
	}`}`;
const API_URL = `${HOST_URL}/api/`;

export const endPoints = {
	books: (id) => `${API_URL}books${id ? `/${id}` : ""}`,
};
