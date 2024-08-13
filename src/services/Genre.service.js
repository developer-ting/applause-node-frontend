/** get All Genre */
export async function getAllGenre({ token }) {
	const res = await fetch(`${process.env.API_URL}/api/genre`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	const data = await res.json();
	return data.genres;
}

/** create Genre */
export async function createGenre({ token, name }) {
	const formdata = new FormData();
	formdata.append("title", name);
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/genre`, {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: formdata,
	});
	const data = await res.json();
	return data;
}

/** create Genre */
export async function updateGenre({ token, slug, name }) {
	const formdata = new FormData();
	formdata.append("title", name);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/genre/${slug}`,
		{
			method: "PUT",
			headers: { Authorization: `Bearer ${token}` },
			body: formdata,
		}
	);
	const data = await res.json();
	return data;
}
