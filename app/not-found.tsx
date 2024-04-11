import React from "react";
import { Metadata } from "next";

export default function NotFound() {
	return (
		<div>
			<p>NOT FOUND</p>
		</div>
	);
}

export const metadata: Metadata = {
	title: "Page not found",
};
