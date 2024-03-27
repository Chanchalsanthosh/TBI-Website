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
import Company from './components/company'; 
import Announce from "./pages/Announce";


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
  },
  {
    path:"company",
    element : <Company />
  },
  {
    path:"announce",
    element:<Announce/>
  }
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
   
);

