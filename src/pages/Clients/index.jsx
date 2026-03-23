import { useNavigate } from "react-router";
import { CreateAction, HeadersWrapper } from "../../components";
import Client from "./Client";
import { routes } from "../../pageRoutes";
import { useClients } from "../../hooks";

const Clients = () => {
	const navigate = useNavigate();
	const { clients } = useClients();

	return (
		<>
			<CreateAction
				title="Create Client"
				onCreate={() => navigate(routes.createClient)}
			/>

			<HeadersWrapper>
				<div>Name</div>
				<div>Client Code</div>
				<div>Number Of Contacts</div>
			</HeadersWrapper>

			{
				clients.length > 0 ? (
					clients.map(aClient => (
						<Client
							name={aClient.name}
							clientCode={aClient.clientCode}
							numberOfContacts={aClient.numberOfContacts}
						/>
					))
				) : (<div>No client(s) found</div>)
			}
		</>
	)
}
export default Clients;