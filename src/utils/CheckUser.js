"use server";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

/** */
export default async function CheckUser() {
	const session = await auth();
	if (!session) {
		redirect("/login");
	}
}
