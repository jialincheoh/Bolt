import React from 'react'
import Menubar from './Menubar.js'
import Home from './Home.js'
import SentMemos from './SentMemos.js'
import RecievedMemos from './RecievedMemos.js'
import Drafts from './Drafts.js'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    sectionA: {
        margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 1}px`,
       // padding: `0 ${theme.spacing.unit * 2}px`,
      },

})

class Homepage extends React.Component{
    state={ page:0,name:'Email',body:"Message",subject:"sub",anchorEl:null,open: null,level:0}

    menuHandler(ev){
        this.setState({page:ev,open:false}); 
    }
    handleChange(name,ev){

        this.setState({[name]:ev,})
    }

    handleClick(ev){
        this.setState({anchorEl: ev.currentTarget , open:true})
    }
    handleClose(ev){
        this.setState({anchorEl: null ,open:null})
    }
    handleClickAway(ev){
        this.setState({anchorEl: null , open:null})
    }

  //  <div><Menubar changeMenu={this.menuHandler.bind(this)}/></div>
    render(){
        const { classes } =this.props
        return(<div>
             <div>
                 <Menubar 
             changeMenu={this.menuHandler.bind(this)} 
             clickHandler={this.handleClick.bind(this)}
             closeHandler={this.handleClose.bind(this)}
             clickAwayHandler={this.handleClickAway.bind(this)}
             anchorEl={this.state.anchorEl} 
             open={this.state.open} 
             level={this.state.level}/>
             </div>
         <div className={classes.sectionA}> {
             (()=>{ switch (this.state.page) {
                case 0:
                return <div><Home/></div>
                case 1:
                return <div><SentMemos/></div>
                case 2:
                return <div><RecievedMemos/></div>
                case 3:
                return <div><Drafts handleChange={this.handleChange.bind(this)} name={this.state.name} body={this.state.body} subject={this.state.subject}/></div>
                case 4:
                return <div>Profile</div>
                default:
                return <div><p>aaaaaaa</p></div>
          }})()} </div>
        </div>)
    }
}
export default withStyles(styles)(Homepage)