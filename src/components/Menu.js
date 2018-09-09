import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavbarBrand, NavbarToggler, NavbarTogglerProps } from 'reactstrap'
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap'

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
            <React.Provider>
                <Navbar color='dark' dark>
                    <NavbarBrand href='/'>{this.props.name}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
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
            </React.Provider>
        )
    }
}

Menu.propTypes = propTypes
Menu.defaultProps = defaultProps
