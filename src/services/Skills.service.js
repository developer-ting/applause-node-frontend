/** get All Genre */
export async function getAllSkill({ token }) {
	const res = await fetch(`${process.env.API_URL}/api/skills`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	const data = await res.json();
	return data.skills;
}

/** create Genre */
export async function createSkill({ token, name }) {
	const formdata = new FormData();
	formdata.append("title", name);
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills`, {
		method: "POST",
		headers: { Authorization: `Bearer ${token}` },
		body: formdata,
	});
	const data = await res.json();
	return data;
}

/** create Genre */
export async function updateSkill({ token, slug, name }) {
	const formdata = new FormData();
	formdata.append("title", name);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/skills/${slug}`,
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
export async function deleteSkill({ token, name }) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/skills/${name}`,
		{
			method: "DELETE",
			headers: { Authorization: `Bearer ${token}` },
		}
	);
	const data = await res.json();
	window.location.reload();
	return data;
}
