import React from 'react';
import { Routes, Route, Link, Outlet, useTheme } from 'react-router-dom';
import { TransitionProvider } from './context/TransitionContext';
import TransitionComponent from './components/Transition';
import ProfileHomeStack from './Profile-Pages/ProfileHomeStack'; // Adjusted import path
import Experience from './Profile-Pages/Experience'; // Adjusted import path
import Skills from './Profile-Pages/Skill'; // Adjusted import path
import Crededentials from './Containers/Crededentials'; // Adjusted import path
import AboutMe from './Containers/AboutMe'; // Adjusted import path
import { CustomThemeProvider } from 'another-library';

const Router = () => {
  return (
    <CustomThemeProvider>
      <TransitionProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/C" element={<Crededentials />} />
          <Route path="/myprofile" element={<MyProfile />}>
            <Route path="/projects" element={<Projects />} />
            <Route path="/design&documentation" element={<Design&Documentation />} />
            <Route path="/engage&explore" element={<Engage&Explore />} />
            <Route path="/live&learn" element={<Live&Learn />} />
          </Route>
        </Routes>;
        <nav>
         <li><Link to="/">Landingpage</Landingpagek></li>
         <li><Link to="/AboutMe">AboutMe</Link></li>
    <li><Link to="/ContactInfo">ContactInfo</Link></li>
    <li>Link to="/Credentials">Crededentials</Link></li>

      </TransitionProvider>
    </CustomThemeProvider>
  );
};

export default Router;