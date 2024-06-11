"use client";
// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";

// SECTIONS //
import Characters from "@/sections/actors/Characters";

// PLUGINS //
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";

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
				<fieldset className="grid grid-cols-3 gap-6 rounded-lg border p-4">
					<legend className="-ml-1 px-1 text-sm font-medium">Project</legend>

					<div className="grid gap-3">
						<Label htmlFor="name">Name</Label>
						<Input id="name" type="text" placeholder="Name" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="genre">Genre</Label>
						<Input id="genre" type="text" placeholder="Genre" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="platform">Platform</Label>
						<Input id="platform" type="text" placeholder="Platform" />
					</div>
					<div className="grid gap-3 col-span-3">
						<Label htmlFor="desc">Description (Max characters : 500)</Label>
						<Textarea
							id="desc"
							type="text"
							placeholder="Description"
							maxlength={500}
						/>
					</div>
					<div className="grid gap-3">
						<Label htmlFor="platform">Release date</Label>
						<DatePicker />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="Rated">Rated</Label>
						<Input id="rated" type="text" placeholder="Rated" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="producers">Producers</Label>
						<Input id="producers" type="text" placeholder="Producers" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="directors">Directors</Label>
						<Input id="directors" type="text" placeholder="Directors" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="cast">Cast</Label>
						<Input id="cast" type="text" placeholder="Cast" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="castingdirector">Casting Director</Label>
						<Input id="castingdirector" type="text" placeholder="Casting Director" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="phone">Phone</Label>
						<Input id="phone" type="number" placeholder="Phone" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="Email" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="imdb">IMDB Link</Label>
						<Input id="imdb" type="text" placeholder="IMDB Link" />
					</div>
				</fieldset>
				<fieldset className="grid gap-6 rounded-lg border p-4">
					<legend className="-ml-1 px-1 text-sm font-medium">Thumbnail</legend>

					<div className="grid gap-2">
						<div className="grid grid-cols-3 gap-2">
							<Input id="picture" type="file" />
						</div>
					</div>
				</fieldset>
				<Characters />
			</form>
		</div>
	);
};
