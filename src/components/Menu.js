import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavbarBrand, NavbarToggler, NavbarTogglerProps } from 'reactstrap'
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap'

import FilterText from './FilterText'

const propTypes = {
    name: PropTypes.string.isRequired
}

const defaultProps = {}

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar color='dark' dark>
                    <NavbarToggler onClick={this.toggle} />
                    <FilterText />
                    <NavbarBrand href='/'>{this.props.name}</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink>As Cards</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>As List</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

Menu.propTypes = propTypes
Menu.defaultProps = defaultProps
