"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import userSignIn from "@/utils/UserSignIn";

/** Login form */
export default function LoginForm() {
	const { toast } = useToast();

	/** handlesubmit */
	const handleSubmit = async (e) => {
		const email = e.get("email");
		const password = e.get("password");

		const error = await userSignIn(email, password);
		console.log(error);

		if (error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: error.error.message,
			});
			return;
		}

		toast({
			title: "Logged",
			description: "Login Successsful...!",
		});
	};

	return (
		<>
			<Toaster />
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account.
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<form action={handleSubmit}>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<div className="grid gap-2 mt-8">
							<Label htmlFor="password">Password</Label>
							<Input id="password" name="password" type="password" required />
						</div>
						<Button type="submit" className="mt-9 w-full">
							Sign in
						</Button>
					</form>
				</CardContent>
				<CardFooter>
					{/* <Button type="submit" className="w-full">
					Sign in
				</Button> */}
				</CardFooter>
			</Card>
		</>
	);
}
