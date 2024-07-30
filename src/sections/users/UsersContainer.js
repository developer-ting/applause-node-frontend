// MODULES //

// COMPONENTS //
import Image from "next/image";

// SECTIONS //

// PLUGINS //
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

// STYLES //

// UTILS //

// IMAGES //
import ProfileImg from "/public/img/users/profile_pic.png";

// DATA //

/** Users Container */
export default function UsersContainer({ users }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Front Users</CardTitle>
				<CardDescription>Manage your users.</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="hidden w-[100px] sm:table-cell">
								<span className="sr-only">Image</span>
							</TableHead>
							<TableHead>Name</TableHead>
							{/* <TableHead>Status</TableHead> */}
							{/* <TableHead className="hidden md:table-cell">Price</TableHead> */}
							{/* <TableHead className="hidden md:table-cell">Total Sales</TableHead> */}
							{/* <TableHead className="hidden md:table-cell">Created at</TableHead> */}
							<TableHead>
								<span className="sr-only">Actions</span>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((item, ind) => {
							return (
								<TableRow key={ind}>
									<TableCell className="hidden sm:table-cell">
										<Image
											alt="Product image"
											className="aspect-square rounded-md object-cover"
											height="64"
											src={item.profile || ProfileImg}
											width="64"
										/>
									</TableCell>
									<TableCell className="font-medium">
										{item.firstname} {item.lastname}
									</TableCell>
									{/* <TableCell>
										<Badge variant="outline">Draft</Badge>
									</TableCell> */}
									{/* <TableCell className="hidden md:table-cell">$499.99</TableCell> */}
									{/* <TableCell className="hidden md:table-cell">25</TableCell> */}
									{/* <TableCell className="hidden md:table-cell">
										2023-07-12 10:42 AM
									</TableCell> */}
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
							);
						})}
					</TableBody>
				</Table>
			</CardContent>
			{/* <CardFooter>
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#" isActive>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</CardFooter> */}
		</Card>
	);
}
