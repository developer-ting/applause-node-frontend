// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/sections/ContactForm";
import MetaTags from "@/components/MetaTags";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "@/styles/pages/Contact.module.scss";

// UTILS //

// IMAGES //

// DATA //

/** Contact Page */
export default async function ContactPage() {
	const session = await auth();
	if (!session) {
		redirect("/login");
	}
	return (
		<div>
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			<Header />

			{/* Page Content starts here */}
			<main className={styles.ContactPage}>
				<div className="container">
					<h2>This is contact page</h2>
					<ContactForm />
				</div>
			</main>
			{/* Page Content ends here */}

			<Footer />
		</div>
	);
}
