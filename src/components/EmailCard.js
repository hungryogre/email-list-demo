import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody, CardImg } from 'reactstrap'
import { url } from 'gravatar'

const propTypes = {
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
}

const defaultProps = {}

export default class EmailCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardHeader>
                        <CardImg top src={url(this.props.address, { s: 256, d: 'monsterid' })} />
                    </CardHeader>
                    <CardBody>
                        <h5>{this.props.address}</h5>
                    </CardBody>
                </Card>
            </React.Fragment>
        )
    }
}

EmailCard.propTypes = propTypes
EmailCard.defaultProps = defaultProps