import React from 'react'
import Auth from './Auth';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
const styles = theme => ({
    padding: {
        padding: `0 ${theme.spacing.unit * 2}px`,
      },
      root:{

      }

})

class Menubar extends React.Component{

handleClick(ev){
    this.props.clickHandler(ev)
    
}
handleClose(ev){
    this.props.closeHandler(ev)
}
handleClickAway(ev){
    this.props.clickAwayHandler(ev)
}
menuHandler(ev){
    this.props.changeMenu(ev.target.value);
  
}
    render(){
        return(<div>
            <AppBar  position="fixed">
                <Toolbar>
                 
              
                <div>
                <Button   
                aria-owns={this.props.anchorEl ? 'nav-menu' : undefined}
            aria-haspopup="true" onClick={this.handleClick.bind(this)}>
            <Menu     
            id="nav-menu"
          anchorEl={this.props.anchorEl}
          open={Boolean(this.props.anchorEl)}
          onClose={this.handleClose.bind(this)}>
                <MenuItem value={0} onClick={this.menuHandler.bind(this)}>Home</MenuItem>
                <MenuItem value={1} onClick={this.menuHandler.bind(this)}>Sent Memos</MenuItem>
                <MenuItem value={2} onClick={this.menuHandler.bind(this)}>Recieved Memos</MenuItem>
                <MenuItem value={3} onClick={this.menuHandler.bind(this)}>Drafts</MenuItem>
                <MenuItem onClick={e => Auth.logout()}>Logout</MenuItem>
            </Menu>
                <Typography variant="h6">Open Menu</Typography>
                </Button>
                </div>

                <Typography variant="h6">Bolt</Typography>
                </Toolbar>
                </AppBar>
                <Typography>Welcome User</Typography></div>
        )
    }
}
//{this.props.open ? (): null}
export default withStyles(styles)(Menubar)