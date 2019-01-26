import React from 'react';
import TemplateSidebar from '../components/TemplateSidebar';
import About from '../components/About';

const Route = () => (
  <TemplateSidebar pageTitle="Posts">
    <About title="Posts" />
  </TemplateSidebar>
);

export default Route;
