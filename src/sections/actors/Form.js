"use client";

// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import FancyMultiSelect from "@/components/ui/fancy-multi-select";

// SECTIONS //
import Characters from "@/sections/actors/Characters";

// PLUGINS //
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { Switch } from "@/components/ui/switch";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

// STYLES //

// UTILS //

// IMAGES //

// DATA //
const LANGUAGES = [
	{
		value: "marathi",
		label: "Marathi",
	},
	{
		value: "hindi",
		label: "Hindi",
	},
	{
		value: "english",
		label: "English",
	},
];
const SKILLS = [
	{
		value: "swimming",
		label: "Swimming",
	},
	{
		value: "drawing",
		label: "Drawing",
	},
	{
		value: "runing",
		label: "Runing",
	},
];

/** */
function onLanguageChange(e) {
	console.log("Test", e);
}

/** Actors Form */
const ActorsForm = () => {
	return (
		<div className="relative flex-col items-start gap-8 md:flex">
			<form className="grid w-full items-start gap-6">
				<fieldset className="grid grid-cols-3 gap-6 rounded-lg border p-4">
					<legend className="-ml-1 px-1 text-sm font-medium">Actor</legend>

					<div className="grid gap-3">
						<Label htmlFor="name">Name</Label>
						<Input id="name" type="text" placeholder="Name" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="age">Age (Birth Year)</Label>
						<Input id="age" type="text" placeholder="Age" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="isaprrox">Is Approx</Label>
						<Switch />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="height">Height</Label>
						<Input id="height" type="text" placeholder="Height" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="instalink">Insta Link</Label>
						<Input id="instalink" type="text" placeholder="Insta Link" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="imdblink">IMDB Link</Label>
						<Input id="imdblink" type="text" placeholder="IMDB Link" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="languages">Languages Spoken</Label>
						<FancyMultiSelect DATA={LANGUAGES} onChange={onLanguageChange} />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="skills">Skills</Label>
						<FancyMultiSelect DATA={SKILLS} onChange={onLanguageChange} />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="phone">Phone</Label>
						<Input id="phone" type="text" placeholder="Phone" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="text" placeholder="Email" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="managername">Manager Name</Label>
						<Input id="managername" type="text" placeholder="Manager Name" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="managercontact">Manager Contact</Label>
						<Input id="managercontact" type="text" placeholder="Manager Contact" />
					</div>
					<div className="grid gap-3">
						<Label htmlFor="applausestatus">Applause Status</Label>
						<Select>
							<SelectTrigger className="w-[35%]">
								<SelectValue placeholder="Select Character Type" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="primary">Primary</SelectItem>
									<SelectItem value="secondary">Secondary</SelectItem>
									<SelectItem value="tertiary">Tertiary</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
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

export default ActorsForm;
