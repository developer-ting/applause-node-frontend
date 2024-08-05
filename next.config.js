/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["img.youtube.com", "res.cloudinary.com", "i1.sndcdn.com"],
	},
};

module.exports = nextConfig;
