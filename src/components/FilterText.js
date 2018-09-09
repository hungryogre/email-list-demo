import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'reactstrap'
import { connect } from 'react-redux'

import { EDIT_FITLER, TOGGLE_REGEX, CLEAR_FILTER } from '../actions/filter'
import { editFilter } from '../actions/filter'

const propTypes = {
    text: PropTypes.string.isRequired,
    regex: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
}

const defaultProps = {}

class FilterText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <Input onChange={this.props.handleChange} type='filter' name='filter' placeholder='Filter' />
                </Form>
            </React.Fragment>
        )
    }
}

FilterText.propTypes = propTypes
FilterText.defaultProps = defaultProps

const mapStateToProps = state => state.filter

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: e => dispatch(editFilter(e.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterText)