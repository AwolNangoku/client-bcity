import "./index.css";

const CreateAction = ({ title, onCreate }) => {
	return (
		<div>
			<button
				className="button create-action"
				onClick={onCreate}
			>
				{title}
			</button>
		</div>
	)
}
export default CreateAction;