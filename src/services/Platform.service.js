/** get All Genre */
export async function getAllPlatform({ token }) {
	const res = await fetch(`${process.env.API_URL}/api/platform`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	const data = await res.json();
	return data.platform;
}

/** create Genre */
export async function createPlatform({ token, name }) {
	const formdata = new FormData();
	formdata.append("title", name);
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/platform`, {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: formdata,
	});
	const data = await res.json();
	return data;
}

/** create Genre */
export async function updatePlatform({ token, slug, name }) {
	const formdata = new FormData();
	formdata.append("title", name);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/platform/${slug}`,
		{
			method: "PUT",
			headers: { Authorization: `Bearer ${token}` },
			body: formdata,
		}
	);
	const data = await res.json();
	return data;
}

/** create Genre */
export async function deletePlatform({ token, name }) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/platform/${name}`,
		{
			method: "DELETE",
			headers: { Authorization: `Bearer ${token}` },
		}
	);
	const data = await res.json();
	window.location.reload();
	return data;
}
