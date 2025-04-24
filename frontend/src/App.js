import { createBrowserRouter, Route, Routes } from "react-router";
import MainNavigation from './components/MainNavigation'
import Homepage from "./components/pages/Homepage";
import Events from "./components/pages/Events";
import EventDetails from "./components/pages/EventDetails";
import NewEvent from "./components/pages/NewEvent";
import EditEvent from "./components/pages/EditEvent";
import RootLayout from "./components/pages/RootLayout";
import { RouterProvider } from "react-router-dom";
import EventsRootLayout from "./components/pages/EventsRootLayout";

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    children: [
      {index: true, element: <Homepage/>},
      {path: 'events', element: <EventsRootLayout />, children: [
        {index: true, element: <Events />},
        {path: ':eventId', element: <EventDetails />},
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
