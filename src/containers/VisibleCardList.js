import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CardList from '../components/CardList'

const propTypes = {}

const defaultProps = {}

class VisibleCardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <CardList emails={this.props.visibleEmails} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const filterByText = s => s.includes(state.filter.text)
    const filterByRegex = s => s.match(state.filter.text) !== null
    const f = state.filter.regex ? filterByRegex : filterByText

    return { visibleEmails: state.email.list.filter(em => f(em.address)) }
}

VisibleCardList.propTypes = propTypes
VisibleCardList.defaultProps = defaultProps

export default connect(mapStateToProps)(VisibleCardList)