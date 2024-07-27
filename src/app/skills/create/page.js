// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

// SECTIONS //

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
				<div className="flex justify-end">
					<Button size="sm" className="h-8 gap-1">
						<Save className="h-3.5 w-3.5" />
						<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Save</span>
					</Button>
				</div>
				<Form />
			</main>
			{/* Page Content ends here */}
		</div>
	);
}

/** */
const Form = () => {
	return (
		<div className="relative flex-col items-start gap-8 md:flex">
			<form className="grid w-full items-start gap-6">
				<fieldset className="grid gap-6 rounded-lg border p-4">
					<legend className="-ml-1 px-1 text-sm font-medium">Skill</legend>

					<div className="grid gap-3">
						<Label htmlFor="temperature">Name</Label>
						<Input id="firstname" type="text" placeholder="First" />
					</div>
				</fieldset>
			</form>
		</div>
	);
};
