// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

// SECTIONS //
import LoginForm from "../../sections/login/form";

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/Contact.module.scss";

// UTILS //

// IMAGES //

// DATA //

/** Contact Page */
export default async function ContactPage() {
	const session = await auth();
	if (session) {
		redirect("/");
	}
	return (
		<div>
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Page Content starts here */}
			<main className="w-screen h-screen grid place-items-center">
				<div className="">
					<LoginForm />
				</div>
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
