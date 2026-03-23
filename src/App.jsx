import { BrowserRouter, useRoutes, Outlet } from 'react-router-dom';
import PageNotFound from './pages/NotFound';
import { Suspense } from 'react';
import { pageRoutes } from './pageRoutes';

const PageRoute = () => {
	return (
		<Outlet />
	)
}

const AppNavigation = () => 
	useRoutes([
		{
			element: <PageRoute />,
			children: pageRoutes.map(route => ({ path: route.path, element: <route.component /> }))
		},
		{
			element: <PageNotFound />,
			path: "*"
		}
	]);


function App() {
  return (
		<Suspense>
			<BrowserRouter>
				<AppNavigation />
			</BrowserRouter>
		</Suspense>
  )
}

export default App
