// MODULES //

// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SaveBtn from "@/components/SaveBtn";

// SECTIONS //
import UpdateUserForm from "@/sections/users/UpdateUserForm";

// PLUGINS //

// STYLES //

// UTILS //

// IMAGES //

// DATA //

// SERVICES //
import { getSingleUser } from "@/services/Users.service";

/** Contact Page */
export default async function Page({ params }) {
	const session = await auth();
	if (!session) {
		redirect("/login");
	}
	const data = await getSingleUser({
		token: session.user.token,
		email: params.slug,
	});

	return (
		<div>
			<MetaTags Title={"Contact"} Desc={""} OgImg={""} Url={"/contact"} />

			{/* Page Content starts here */}

			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<SaveBtn />
				<UpdateUserForm
					data={data}
					email={params.slug}
					token={session.user.token}
				/>
			</main>
			{/* Page Content ends here */}
		</div>
	);
}
