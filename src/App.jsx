import React from 'react'
import {
  createRoutesFromElements,createBrowserRouter,Route,
  RouterProvider,} from "react-router-dom";
import Home from './pages/Home';
import Admission from './pages/Admission';
import Branches from './pages/Branches';
import Academic from './pages/Academic';
import Facelities from './pages/Facelities';
import AboutUs from './pages/AboutUs';
import Rootlayout from './layouts/Rootlayout';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
    <Route path="/" element={<Home />} ></Route>
    <Route path="/admission" element={<Admission />} ></Route>
    <Route path="/branches" element={<Branches />} ></Route>
    <Route path="/academic" element={<Academic />} ></Route>
    <Route path="/facelities" element={<Facelities />} ></Route>
    <Route path="/aboutus" element={<AboutUs />} ></Route>
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App