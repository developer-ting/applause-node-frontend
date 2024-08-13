"use client";
// MODULES //
import { useRouter } from "next/navigation";

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

// SERVICES //
import { createPlatform, updatePlatform } from "@/services/Platform.service";

/** */
const PlatformForm = ({ slug, isUpdate }) => {
	const router = useRouter();
	/** */
	const handleSubmit = async (e) => {
		console.log("asdasd");
		e.preventDefault();
		const formdata = e.target;
		const name = formdata.firstname.value;
		console.log(name);
		if (!name) return;
		if (isUpdate) {
			await updatePlatform({ slug: slug, name: name });
		} else {
			await createPlatform({ name: name });
		}
		router.push("/platform");
		router.refresh();
	};
	return (
		<div className="relative flex-col items-start gap-8 md:flex">
			<form className="form grid w-full items-start gap-6" onSubmit={handleSubmit}>
				<fieldset className="grid gap-6 rounded-lg border p-4">
					<legend className="-ml-1 px-1 text-sm font-medium">Platform</legend>

					<div className="grid gap-3">
						<Label htmlFor="temperature">Name</Label>
						<Input id="firstname" type="text" placeholder="First" />
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default PlatformForm;
