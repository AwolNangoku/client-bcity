import { lazy } from "react"

// Pages
const CreateClient = lazy(() => import("../src/pages/CreateClient"))
const Clients = lazy(() => import("../src/pages/Clients"))
const CreateContact = lazy(() => import("../src/pages/CreateContact"))
const Contacts= lazy(() => import("../src/pages/Contacts"))

const routes = {
  createClient: "/create-client",
  clients: "/",
  createContact: "/create-contact",
  contacts: "/contacts",
}

const pageRoutes = [
  {
    exact: true,
    title: 'Create Client',
    path: routes.createClient,
    component: CreateClient
  },
  {
    exact: true,
    title: 'Clients',
    path: routes.clients,
    component: Clients
  },
  {
    exact: true,
    title: 'Create Contact',
    path: routes.createContact,
    component: CreateContact
  },
  {
    exact: true,
    title: 'Contacts',
    path: routes.contacts,
    component: Contacts
  },
]

export { pageRoutes, routes }