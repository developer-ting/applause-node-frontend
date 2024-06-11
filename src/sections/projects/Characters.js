// MODULES //

// COMPONENTS //
import Image from "next/image";

// SECTIONS //

// PLUGINS //
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { CirclePlus, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// STYLES //

// IMAGES //
import ProfileImg from "/public/img/users/profile_pic.png";

/** Characters  */
export default function Characters() {
	return (
		<fieldset className="grid gap-6 rounded-lg border p-4">
			<legend className="-ml-1 px-1 text-sm font-medium">Add Characters</legend>

			<div className="flex gap-8 items-center">
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
				<Button size="sm" className="h-8 gap-1">
					<CirclePlus className="h-3.5 w-3.5" />
				</Button>
			</div>

			<CharacterEntry />
		</fieldset>
	);
}

/** */
const CharacterEntry = () => {
	return (
		<fieldset className="grid gap-6 rounded-lg border p-4">
			<legend className="-ml-1 px-1 text-sm font-medium">Character</legend>

			<div className="flex gap-10">
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="email">Character Name</Label>
					<Input type="text" id="charactername" placeholder="" />
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="email">Character Type</Label>
					<Input type="text" id="charactertype" placeholder="" />
				</div>
			</div>
			<div className="flex gap-10 items-center">
				<p>Add Character Auditions</p>
				<Button size="sm" className="h-8 gap-1">
					<CirclePlus className="h-3.5 w-3.5" />
				</Button>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Actor</TableHead>
						<TableHead>Flag</TableHead>
						{/* <TableHead className="hidden md:table-cell">Price</TableHead> */}
						{/* <TableHead className="hidden md:table-cell">Total Sales</TableHead> */}
						<TableHead>Created at</TableHead>
						<TableHead>Video</TableHead>
						<TableHead>
							<span>Actions</span>
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">
							<Select>
								<SelectTrigger className="">
									<SelectValue placeholder="Select Actor" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="primary">Actor 1</SelectItem>
										<SelectItem value="secondary">Actor 2</SelectItem>
										<SelectItem value="tertiary">Actor 3</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</TableCell>
						<TableCell>
							<Select>
								<SelectTrigger className="">
									<SelectValue placeholder="Select Flag" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="primary">None</SelectItem>
										<SelectItem value="secondary">Casted</SelectItem>
										<SelectItem value="tertiary">Shortlisted</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</TableCell>
						{/* <TableCell className="hidden md:table-cell">$499.99</TableCell> */}
						{/* <TableCell className="hidden md:table-cell">25</TableCell> */}
						<TableCell className="">2023-07-12 10:42 AM</TableCell>
						<TableCell className="w-[20%]">
							<Input id="picture" type="file" />
						</TableCell>
						<TableCell>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button aria-haspopup="true" size="icon" variant="ghost">
										<MoreHorizontal className="h-4 w-4" />
										<span className="sr-only">Toggle menu</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuLabel>Actions</DropdownMenuLabel>
									<DropdownMenuItem>Edit</DropdownMenuItem>
									<DropdownMenuItem>Delete</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</fieldset>
	);
};
