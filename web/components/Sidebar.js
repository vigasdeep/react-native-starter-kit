import React from 'react';
import { Col, Nav } from 'reactstrap';
import MainMenu from './MainMenu';

const Sidebar = () => (
  <div>
    <Col sm="3" md="2" className="d-none d-sm-block sidebar">
      <Nav vertical>
        <MainMenu />
      </Nav>
    </Col>
  </div>
);

export default Sidebar;
