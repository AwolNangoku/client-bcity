import Client from "./Client";
import "./index.css";

const Clients = () => {
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

	return (
		<div className="center">
			<div className="headers-wrapper">
				<div>Name</div>
				<div>Client Code</div>
				<div>Number Of Contacts</div>
			</div>

			{
				clients.length > 0 ? (
					clients.map(aClient => (
						<Client
							name={aClient.name}
							clientCode={aClient.clientCode}
							numberOfContacts={aClient.numberOfContacts}
						/>
					))
				) : (<div>No clients</div>)
			}
		</div>
	)
}
export default Clients;