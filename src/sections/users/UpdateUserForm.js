"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { postUser, updateUser } from "@/services/Users.service";
import { useForm } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import Image from "next/image";
import Cam from "/public/img/icons/cam.png";

/** Update User Form */
const UpdateUserForm = ({ data, email, token }) => {
	const [thumb, setThumb] = useState(data?.profile);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	console.log(data);
	/** */
	const onSubmit = async (formObj) => {
		console.log(formObj);
		const formdata = new FormData();
		formObj.firstname && formdata.append("firstname", formObj.firstname);
		formObj.lastname && formdata.append("lastname", formObj.lastname);
		formObj.email && formdata.append("email", formObj.email);
		formObj.password && formdata.append("password", formObj.password);
		formObj.profile[0] && formdata.append("profile", formObj.profile[0]);

		await updateUser({ formdata: formdata, email: email, token: token });
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
							placeholder={data?.firstname || "First"}
							// defaultValue={data?.firstname || ""}
							{...register("firstname", {
								// required: { value: true, message: "This field is required" },
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
							placeholder={data?.lastname || "Last"}
							// defaultValue={data?.lastname || "Last"}
							{...register("lastname", {
								// required: { value: true, message: "This field is required" },
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
							placeholder={data?.email || "email@gmail.com"}
							// defaultValue={data?.email || "email@gmail.com"}
							{...register("email", {
								// required: { value: true, message: "This field is required" },
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
							placeholder="password"
							{...register("password", {
								// required: { value: true, message: "This field is required" },
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
						<div className="flex items-center gap-2">
							<Input
								id="picture"
								name="picture"
								type="file"
								className="hidden"
								{...register("profile", {
									// required: { value: true, message: "This field is required" },
									onChange: (e) => setThumb(URL.createObjectURL(e.target.files[0])),
								})}
							/>
							<Label htmlFor="picture" className="cursor-pointer relative group">
								<Avatar className="w-[150px] h-[150px] group-hover:opacity-[0.5] transition-all">
									<AvatarImage className="object-cover" src={thumb} />
									<AvatarFallback>Thumb</AvatarFallback>
								</Avatar>
								<Image
									alt="cam"
									src={Cam}
									className="pointer-events-none transition-all opacity-0 w-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:opacity-[1]"
								/>
							</Label>
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

export default UpdateUserForm;
