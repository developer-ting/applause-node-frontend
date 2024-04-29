// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage} bg_primary`}>
				<h2>This is ting base next.js template</h2>
			</main>
			{/* Page Content ends here */}

			<Footer />
		</div>
	);
}
