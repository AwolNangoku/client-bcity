import "./index.css";

const Contact = ({ name, surname, email, numberOfClients }) => {
	return (
		<div className="wrapper">
			<div>
				{name}
			</div>

			<div>
				{surname}
			</div>

			<div>
				{email}
			</div>

			<div>
				{numberOfClients}
			</div>
		</div>
	)
}
export default Contact;