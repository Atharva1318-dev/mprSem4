import { prevUser } from "./UserContextChat";

export async function query() {
	const response = await fetch(
		"",
		{
			headers: {
				Authorization: "",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs":prevUser.prompt}),
		}
	);
	
	const result = await response.blob();
	
	return result;
}
