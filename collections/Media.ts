import { CollectionConfig } from "payload/types";
const Media: CollectionConfig = {
	slug: "media",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "alt",
			type: "text",
		},
	],
	upload: {
		disableLocalStorage: false,
		staticDir: "media",
		mimeTypes: ["image/*", "video/*"],
	},
};

export default Media;
