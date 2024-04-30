// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";

// SECTIONS //

// PLUGINS //
import { Button } from "@/components/ui/button";

// STYLES //
import styles from "@/styles/pages/Contact.module.scss";

// UTILS //

// IMAGES //

// DATA //

/** Contact Page */
export default function ContactPage() {
	return (
		<>
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Page Content starts here */}
			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
					<div className="flex flex-col items-center gap-1 text-center">
						<h3 className="text-2xl font-bold tracking-tight">Applause Dashboard</h3>
						<p className="text-sm text-muted-foreground">Start adding data.</p>
						{/* <Button className="mt-4">Add Product</Button> */}
					</div>
				</div>
			</main>
			{/* Page Content ends here */}
		</>
	);
}
