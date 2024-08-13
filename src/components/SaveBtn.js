"use client";
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //

// UTILS //
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

// IMAGES //

// DATA //

/** SaveBtn */
const SaveBtn = () => {
	/** */
	function submit() {
		const form = document.querySelector(".form");
		const event = new Event("submit", { bubbles: true, cancelable: true });
		console.log(form, event);
		form.dispatchEvent(event);
	}

	return (
		<div className="flex justify-end">
			<Button size="sm" className="h-8 gap-1" onClick={submit}>
				<Save className="h-3.5 w-3.5" />
				<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Save</span>
			</Button>
		</div>
	);
};

export default SaveBtn;
