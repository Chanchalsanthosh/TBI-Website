import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Events from "./pages/events";
import Startup from "./pages/startup";
import Mentor from "./pages/mentor";
import Incubate from "./pages/incubate";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"Events",
    element:<Events/>
  },
  {
    path:"startup",
    element: <Startup/>
  },
  {
    path:"mentor",
    element: <Mentor/>
  },
  {
    path:"incubate",
    element:<Incubate/>
  }
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
   
);
