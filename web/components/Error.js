import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';

const Error = ({ title, content }) => (
  <Row>
    <Col lg="4">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        <Link href="/"><a className="btn btn-primary">Go Home</a></Link>
      </p>
    </Col>
  </Row>
);

Error.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Error.defaultProps = {
  title: 'Uh oh',
  content: 'An unexpected error came up',
};

export default Error;
