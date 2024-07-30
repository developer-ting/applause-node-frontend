// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SaveBtn from "@/components/SaveBtn";

// SECTIONS //
import CreateUserForm from "@/sections/users/CreateUserForm";

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
import { getSingleUser } from "@/services/Users.service";

/** Contact Page */
export default async function Page() {
	const session = await auth();
	if (!session) {
		redirect("/login");
	}
	const data = await getSingleUser({ token: session.user.token });

	return (
		<div>
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Page Content starts here */}

			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<SaveBtn />
				<CreateUserForm data={data} />
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
