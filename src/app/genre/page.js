// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Link from "next/link";

// SECTIONS //
import GenreContainer from "@/sections/genre/GenreContainer";

// PLUGINS //
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
// STYLES //

// UTILS //

// IMAGES //

// DATA //

/** Contact Page */
export default function Page() {
	return (
		<div>
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Page Content starts here */}

			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<Link href="/genre/create" className="flex">
					<Button size="sm" className="h-8 gap-1">
						<PlusCircle className="h-3.5 w-3.5" />
						<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
							Add Genre
						</span>
					</Button>
				</Link>
				<GenreContainer />
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
