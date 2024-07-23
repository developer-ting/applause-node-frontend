// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";

// SECTIONS //
import ActorsContainer from "@/sections/actors/ActorsContainer";

// PLUGINS //
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

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
				<div className="flex justify-between items-end">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="email">Search</Label>
						<Input type="text" id="search" placeholder="" />
					</div>
					<Link href="/actors/create">
						<Button size="sm" className="h-8 gap-1">
							<PlusCircle className="h-3.5 w-3.5" />
							<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
								Add Actor
							</span>
						</Button>
					</Link>
				</div>
				<ActorsContainer />
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
