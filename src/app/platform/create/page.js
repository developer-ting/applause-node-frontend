// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SaveBtn from "@/components/SaveBtn";

// SECTIONS //
import PlatformForm from "@/sections/platform/PlatformForm";

// PLUGINS //
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { Input } from "@/components/ui/input";

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
				<SaveBtn />
				<PlatformForm slug={session.user.token} />
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
