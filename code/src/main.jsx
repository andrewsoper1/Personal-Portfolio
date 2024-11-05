import REACTDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'
import App from './App.jsx';
import About from './pages/aboutme.jsx';
import Contact  from './pages/contact.jsx';
import Portfolio from './pages/portfolio.jsx';
import Resume from  './pages/resume.jsx';

const router =  createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element:<About/>,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  ]);


REACTDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
