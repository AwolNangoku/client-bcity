export default function useContacts() {
	// server call - this will be a showcasing of useSWR and fetchAPI integration
	const contacts = [
		{
			name: "Owen",
			surname: "Kings",
			email: "owenkings@gmail.com",
			numberOfClients: 2
		},
		{
			name: "Fame",
			surname: "Jones",
			email: "famejones@gmail.com",
			numberOfClients: 1
		},
		{
			name: "Jona",
			surname: "Greens",
			email: "jinagreens@gmail.com",
			numberOfClients: 1
		}
	];
	
	return { contacts }
}