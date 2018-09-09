import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

const propTypes = {
    emails: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        address: PropTypes.string.isRequired,
    }))
}

const defaultProps = {
    emails: []
}

export default class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        {this.props.emails.map(em => <Col key={em.id}>{em.address}</Col>)}
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

Cards.propTypes = propTypes
Cards.defaultProps = defaultProps