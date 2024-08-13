"use client";
// MODULES //
import { useRouter } from "next/navigation";

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import SaveBtn from "@/components/SaveBtn";

// SECTIONS //

// PLUGINS //
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// STYLES //

// UTILS //

// IMAGES //

// DATA //

// SERVICES //
import { createGenre, updateGenre } from "@/services/Genre.service";

/** Contact Page */
export default function Page({ params }) {
	return (
		<div>
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Page Content starts here */}

			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<SaveBtn />
				<Form slug={params.slug} />
			</main>
			{/* Page Content ends here */}
		</div>
	);
}

/** */
const Form = ({ slug }) => {
	const router = useRouter();
	/** */
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formdata = e.target;
		const name = formdata.firstname.value;
		await updateGenre({ slug: slug, name: name });
		router.push("/genre");
		router.refresh();
	};
	return (
		<div className="relative flex-col items-start gap-8 md:flex">
			<form className="form grid w-full items-start gap-6" onSubmit={handleSubmit}>
				<fieldset className="grid gap-6 rounded-lg border p-4">
					<legend className="-ml-1 px-1 text-sm font-medium">Genre</legend>

					<div className="grid gap-3">
						<Label htmlFor="temperature">Name</Label>
						<Input name="firstname" id="firstname" type="text" placeholder="First" />
					</div>
				</fieldset>
			</form>
		</div>
	);
};
