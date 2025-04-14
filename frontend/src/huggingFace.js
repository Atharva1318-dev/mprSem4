import { prevUser } from "./UserContextChat";

export async function query() {
	const response = await fetch(
		"https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0",
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
