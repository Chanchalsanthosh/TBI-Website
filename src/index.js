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
import Blog1 from "./pages/blog1";
import Company2 from "./pages/company2";



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
  },
  {
  path:"blog1",
  element:<Blog1/>
  },
  {
    path:"company2",
    element:<Company2/>
  }
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  
   
);
