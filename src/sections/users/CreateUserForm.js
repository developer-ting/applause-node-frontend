"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { postUser } from "@/services/Users.service";
import { useForm } from "react-hook-form";

/** Create User Form */
const CreateUserForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	/** */
	const onSubmit = async (data) => {
		const formdata = new FormData();
		formdata.append("firstname", data.firstname);
		formdata.append("lastname", data.lastname);
		formdata.append("email", data.email);
		formdata.append("password", data.password);
		formdata.append("profile", data.profile[0]);

		await postUser({ formdata: formdata });
		console.log("asd", data);
	};

	return (
		<div className="relative flex-col items-start gap-8 md:flex">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="createUserForm grid w-full items-start gap-6"
			>
				<fieldset className="grid gap-6 rounded-lg border p-4">
					<legend className="-ml-1 px-1 text-sm font-medium">User</legend>

					<div className="grid gap-3">
						<Label htmlFor="temperature">First Name</Label>
						<Input
							id="firstname"
							type="text"
							placeholder="First"
							{...register("firstname", {
								required: { value: true, message: "This field is required" },
							})}
						/>
						{errors.firstname && (
							<p className="text-sm text-red-600">{errors.firstname.message}</p>
						)}
					</div>
					<div className="grid gap-3">
						<Label htmlFor="temperature">Last Name</Label>
						<Input
							id="lastname"
							type="text"
							placeholder="Last"
							{...register("lastname", {
								required: { value: true, message: "This field is required" },
							})}
						/>
						{errors.lastname && (
							<p className="text-sm text-red-600">{errors.lastname.message}</p>
						)}
					</div>
					<div className="grid gap-3">
						<Label htmlFor="temperature">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="email@gmail.com"
							{...register("email", {
								required: { value: true, message: "This field is required" },
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid email address",
								},
							})}
						/>
						{errors.email && (
							<p className="text-sm text-red-600">{errors.email.message}</p>
						)}
					</div>
					<div className="grid gap-3">
						<Label htmlFor="temperature">Password</Label>
						<Input
							id="password"
							type="password"
							placeholder="BZvRJDbmmKF8Gy7"
							{...register("password", {
								required: { value: true, message: "This field is required" },
							})}
						/>
						{errors.password && (
							<p className="text-sm text-red-600">{errors.password.message}</p>
						)}
					</div>
				</fieldset>
				<fieldset className="grid gap-6 rounded-lg border p-4">
					<legend className="-ml-1 px-1 text-sm font-medium">Thumbnail</legend>

					<div className="grid gap-2">
						<div className="grid grid-cols-3 gap-2">
							<Input
								id="picture"
								type="file"
								{...register("profile", {
									required: { value: true, message: "This field is required" },
								})}
							/>
						</div>
						{errors.profile && (
							<p className="text-sm text-red-600">{errors.profile.message}</p>
						)}
					</div>
				</fieldset>
				<button type="submit" className="onsubmitBtn opacity-0 pointer-events-none">
					submit
				</button>
			</form>
		</div>
	);
};

export default CreateUserForm;
