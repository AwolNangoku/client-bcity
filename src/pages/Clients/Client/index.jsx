import "./index.css";

const Client = ({ name, clientCode, numberOfContacts }) => {
	return (
		<div className="wrapper">
			<div>
				{name}
			</div>

			<div>
				{clientCode}
			</div>

			<div>
				{numberOfContacts}
			</div>
		</div>
	)
}
export default Client;