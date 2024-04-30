// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //
import SmoothScrolling from "@/utils/SmoothScrolling";

// STYLES //

// IMAGES //

// DATA //

export const metadata = {
	title: "Next.js",
	description: "Generated by Next.js",
};

/** Layout */
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}