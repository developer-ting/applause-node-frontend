/** getAllUsers */
export async function getAllUsers({ token }) {
	const res = await fetch(`${process.env.API_URL}/api/users`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	const data = await res.json();
	return data.user;
}

/** post User */
export async function postUser({ formdata }) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
		method: "POST",
		body: formdata,
	});
	const data = await res.json();
	console.log(data, "ad");
	return data;
}
