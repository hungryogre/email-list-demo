import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap'

const propTypes = {};

const defaultProps = {};

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                        <Col>Content</Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

Cards.propTypes = propTypes;
Cards.defaultProps = defaultProps;