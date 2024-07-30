// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

// SECTIONS //
import UsersContainer from "@/sections/users/UsersContainer";

// PLUGINS //
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
// STYLES //

// UTILS //

// IMAGES //

// DATA //

// SERVICES //
import { getAllUsers } from "@/services/Users.service";

/** Contact Page */
export default async function Page() {
	const session = await auth();
	if (!session) {
		redirect("/login");
	}
	const users = await getAllUsers({ token: session.user.token });
	console.log(users);

	return (
		<div>
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Page Content starts here */}

			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<div className="flex">
					<Button size="sm" className="h-8 gap-1">
						<PlusCircle className="h-3.5 w-3.5" />
						<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
							Add Users
						</span>
					</Button>
				</div>
				<UsersContainer users={users} />
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
