import NextAuth, { AuthError } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { CredentialsSignin } from "@auth/core/errors";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				// Add logic here to look up the user from the credentials supplied
				const res = await fetch(`${process.env.API_URL}/api/login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(credentials),
				});
				const result = await res.json();

				if (!res.ok) {
					class customError extends AuthError {
						constructor(message) {
							super();
							this.message = message;
						}
					}
					// No user found, so this is their first attempt to login
					// meaning this is also the place you could do registration
					// throw new Error(result.error);
					throw new customError(result.error);
				}

				return result;
			},
		}),
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			// console.log(user);
			return user;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},
		async jwt({ token, user }) {
			if (user) {
				token.email = user.email;
				token.token = user.token;
			}
			return token;
		},
		async session({ session, token }) {
			session.user.email = token.email;
			session.user.token = token.token;
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
});
