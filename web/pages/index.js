import React from 'react';
import TemplateSidebar from '../components/TemplateSidebar';
import About from '../components/About';

const Route = () => (
  <TemplateSidebar pageTitle="Home">
    <About title="Web & Mobile App Starter Kit" />
  </TemplateSidebar>
);

export default Route;
