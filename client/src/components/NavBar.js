import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='Home' />
          </Link>
          <Link to='./About'>
            <Menu.Item name='About' />
          </Link>
          <Link to='./Skills'>
            <Menu.Item name='Skills' />
          </Link>
          <Link to='./Portfolio'>
            <Menu.Item name='Portfolio' />
          </Link>
          <Link to='./Sandbox'>
            <Menu.Item name='Sandbox' />
          </Link>
          <Link to='./Contact'>
            <Menu.Item name='Contact' />
          </Link>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
