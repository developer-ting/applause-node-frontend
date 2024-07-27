// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

// SECTIONS //
import ActorsForm from "@/sections/actors/Form";

// PLUGINS //
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

// STYLES //

// UTILS //

// IMAGES //

// DATA //

/** Contact Page */
export default async function Page() {
	const session = await auth();
	if (!session) {
		redirect("/login");
	}
	return (
		<div>
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Page Content starts here */}

			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<div className="flex justify-end">
					<Button size="sm" className="h-8 gap-1">
						<Save className="h-3.5 w-3.5" />
						<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Save</span>
					</Button>
				</div>
				<ActorsForm />
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
