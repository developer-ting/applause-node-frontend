// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

// SECTIONS //
import PlatformContainer from "@/sections/platform/PlatformContainer";

// PLUGINS //
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
// STYLES //

// UTILS //

// IMAGES //

// DATA //

// SERVICES //
import { getAllPlatform } from "@/services/Platform.service";

/** Contact Page */
export default async function Page() {
	const session = await auth();
	if (!session) {
		redirect("/login");
	}
	const data = await getAllPlatform({ token: session.user.token });
	return (
		<div>
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Page Content starts here */}

			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<Link href="/platform/create" className="flex">
					<Button size="sm" className="h-8 gap-1">
						<PlusCircle className="h-3.5 w-3.5" />
						<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
							Add Platform
						</span>
					</Button>
				</Link>
				<PlatformContainer data={data} />
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
