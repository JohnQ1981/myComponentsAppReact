import * as React from 'react'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import PopupState, { bindHover, bindMenu, bindTrigger } from 'material-ui-popup-state';
import EssayForm from './Form';

const MenuPopupState = () => (
  <PopupState variant="popover" popupId="demoMenu">
    {(popupState) => (
      <React.Fragment>
        <Button variant="contained" {...bindHover(popupState)}>
          Hover to open Menu
        </Button>
        <HoverMenu
          {...bindMenu(popupState)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem onClick={<EssayForm/>}>Form</MenuItem>
          <MenuItem onClick={popupState.close}>Death</MenuItem>
        </HoverMenu>
      </React.Fragment>
    )}
  </PopupState>
)

export default MenuPopupState;