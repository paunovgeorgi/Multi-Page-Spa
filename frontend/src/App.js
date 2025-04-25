import { createBrowserRouter} from "react-router";
import Homepage from "./components/pages/Homepage";
import Events, { loader as eventsLoader } from "./components/pages/Events";
import EventDetails, {loader as eventDetailsLoader} from "./components/pages/EventDetails";
import NewEvent from "./components/pages/NewEvent";
import EditEvent from "./components/pages/EditEvent";
import RootLayout from "./components/pages/RootLayout";
import { RouterProvider } from "react-router-dom";
import EventsRootLayout from "./components/pages/EventsRootLayout";
import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Homepage/>},
      {path: 'events', element: <EventsRootLayout />, children: [
        {index: true, element: <Events />, loader: eventsLoader},
        {path: ':eventId', element: <EventDetails />, loader: eventDetailsLoader},
        {path: 'new', element: <NewEvent />},
        {path: ':eventId/edit', element: <EditEvent />}
      ]}
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
