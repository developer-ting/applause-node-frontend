"use server";
import { signIn } from "@/auth";

/** */
export default async function userSignIn(email, password) {
	try {
		await signIn("credentials", {
			email,
			password,
			redirect: false,
			redirectTo: "/",
		});
	} catch (err) {
		if (err.type === "AuthError") {
			return {
				error: { message: err.message },
			};
		}

		console.log(err);
	}
}
