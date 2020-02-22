import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>

        <Nav className="d-md-down-none upperlogo-space" navbar>
          <NavItem className="px-3">
            <NavItem className="nav-link" >
              <img src={'../../assets/img/logo.png'} className="img-avatar"/>
            </NavItem>
          </NavItem>
        </Nav>



        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavItem className="nav-link" >
              <input class="form-control mr-sm-2" type="search" placeholder="검색" aria-label="Search" />
            </NavItem>
          </NavItem>
        </Nav>
        <Nav className="ml-auto extramarginup" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/1.png'} className="img-avatar"/>
            </DropdownToggle>
            
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
