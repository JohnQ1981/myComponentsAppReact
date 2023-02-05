import React from 'react';
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import HoverMenu from 'material-ui-popup-state/HoverMenu';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}

        //   { // The following line makes the menu open whenever the mouse passes over the menu }
          onMouseOver={this.handleClick}
        >
          Open Menu
        </Button>
        <HoverMenu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
        </HoverMenu>
      </div>
    );
  }
}

export default SimpleMenu;