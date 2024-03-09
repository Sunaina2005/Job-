import { Suspense } from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CreateJob from "../Pages/CreateJob";
import Home from "../Pages/Home";
import Login from "../Components/Login";

const router = createBrowserRouter([
   // Inside your route configuration
{
    path: '/',
    element: <App />,
    children: [
        { path: '/', 
        element: <Suspense fallback={<div>Loading...</div>}>
                 <Home />
                 </Suspense> },
        { path: '/post-job', 
        element: <Suspense fallback={<div>Loading...</div>}>
                 <CreateJob />
                 </Suspense> },
        { path: '/login',
          element: <Login />
    }
    ],
}
]);
    export default router;