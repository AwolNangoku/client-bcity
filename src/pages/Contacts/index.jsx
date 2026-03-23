import { useNavigate } from "react-router";
import { CreateAction, HeadersWrapper } from "../../components";
import Contact from "./Contact";
import { routes } from "../../pageRoutes";
import { useContacts } from "../../hooks";

const Contacts = () => {
	const navigate = useNavigate();
	const { contacts } = useContacts();

	return (
		<>
			<CreateAction
				title="Create Contact"
				onCreate={() => navigate(routes.createContact)}
			/>

			<HeadersWrapper>
				<div>Name</div>
				<div>Surname</div>
				<div>Email address</div>
				<div>No. of linked clients</div>
			</HeadersWrapper>

			{
				contacts.length > 0 ? (
					contacts.map(aContact => (
						<Contact
							name={aContact.name}
							surname={aContact.surname}
							email={aContact.email}
							numberOfClients={aContact.numberOfClients}
						/>
					))
				) : (<div>No contact(s) found</div>)
			}
		</>
	)
}
export default Contacts;