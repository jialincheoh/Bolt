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
    state={anchorEl:null,open: null,level:0}
handleClick(ev){
    this.setState({anchorEl: ev.currentTarget , open:true})
}
handleClose(ev){
    this.setState({anchorEl: null ,open:null})
}
handleClickAway(ev){
    this.setState({anchorEl: null , open:null})
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
                aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true" onClick={this.handleClick.bind(this)}>
            {this.state.open ? <Menu     
            id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose.bind(this)}>
                <MenuItem value={0} onClick={this.menuHandler.bind(this)}>Home</MenuItem>
                <MenuItem value={1} onClick={this.menuHandler.bind(this)}>Sent Memos</MenuItem>
                <MenuItem value={2} onClick={this.menuHandler.bind(this)}>Recieved Memos</MenuItem>
                <MenuItem value={3} onClick={this.menuHandler.bind(this)}>Drafts</MenuItem>
                <MenuItem onClick={e => Auth.logout()}>Logout</MenuItem>
                </Menu>: null}
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
export default withStyles(styles)(Menubar)