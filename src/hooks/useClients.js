export default function useClients() {
	// server call - this will be a showcasing of useSWR and fetchAPI integration
	const clients = [
		{
			name: "James Moon",
			clientCode: "JM0001",
			numberOfContacts: 2
		},
		{
			name: "Oka Foo",
			clientCode: "OKF0001",
			numberOfContacts: 3
		}
	];

	return { clients }
}