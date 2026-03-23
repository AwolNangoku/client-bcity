import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
		<div>
			<h4>404 error</h4>
			<h2>Page not found</h2>
			<p>
				Sorry, the page you are looking for doesn't exist:
			</p>
			<div>
				<button onClick={() => navigate('/clients')}>
					Back to Clients
				</button>
			</div>
		</div>
  )
}

export default PageNotFound