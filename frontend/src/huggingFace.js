import { prevUser } from "./UserContextChat";

export async function query() {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: "Bearer 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",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs":prevUser.prompt}),
		}
	);
	const result = await response.blob();
	return result;
}
