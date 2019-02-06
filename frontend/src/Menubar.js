import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Auth from './Auth';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({})

class Menubar extends React.Component{
    state={menu:null,}
handleClick(ev){
    this.setState({menu: ev.currentTarget })
}
handleClose(ev){
    this.setState({menu: null })
}

    render(){
        return(<div>
            <AppBar  position="fixed">
                <Toolbar>
                 
                <Button   
                aria-owns={this.state.menu ? 'simple-menu' : undefined}
            aria-haspopup="true" onClick={this.handleClick.bind(this)}>
            <Menu id="simple-menu"
          anchorEl={this.state.menu}
          open={Boolean(this.state.menu)}
          onClose={this.handleClose}>
                <MenuItem onClick={e => Auth.logout()}>Sent Memos</MenuItem>
                <MenuItem onClick={e => Auth.logout()}>Recieved Memos</MenuItem>
                <MenuItem onClick={e => Auth.logout()}>Drafts</MenuItem>
                <MenuItem onClick={e => Auth.logout()}>Logout</MenuItem>
                </Menu>
                <Typography variant="h6">Open Menu</Typography>
                </Button>
                <Typography variant="h6">Bolt</Typography>
                </Toolbar>
                </AppBar>
                <Typography>Welcome User</Typography></div>
        )
    }
}
export default Menubar