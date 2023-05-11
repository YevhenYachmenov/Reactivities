import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import AcitvityForm from "../../features/activities/form/AcitvityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <AcitvityForm key='create' />},
            {path: 'editActivity/:id', element: <AcitvityForm key='edit' />},
        ]
    }
];

export const router = createBrowserRouter(routes);