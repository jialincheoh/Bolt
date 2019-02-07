import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
const styles = theme => ({
   sectionA: {
       margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 1}px`,
      // padding: `0 ${theme.spacing.unit * 2}px`,
     },
     card: {
      width: 400,
     },
     paper: {
      width: 400,
      height: 400,
     },
     textField: {
      width: 400,
    },
    bodyTextField: {
      width: 400,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },

})
class Drafts extends React.Component{
   //paper
handleChange(name,ev){
this.props.handleChange(name,ev.target.value)
}

   render(){
      const { classes } =this.props
      return(
      <React.Fragment>
         <Typography>Drafts</Typography>
         <Card className={classes.card}>
           
            <form
             className={classes.container} noValidate autoComplete="off">
            <Paper> <TextField 
             contentEditable = "true"
             label="Email"
             onChange={this.handleChange.bind(this,'name')} 
             value={this.props.name} 
             className={classes.textField}></TextField>
             <TextField 
             contentEditable = "true"
             label="Subject Line"
             onChange={this.handleChange.bind(this,'subject')} 
             value={this.props.subject} 
             className={classes.textField}></TextField>
             </Paper>
             <Paper 
             label="Memo" 
             contentEditable = "true" 
             className={classes.paper} 
             value={this.props.body}   
             onChange={this.handleChange.bind(this,'body')} >
             </Paper>
             </form>
            </Card>
      </React.Fragment>
      )
      } 
}
export default withStyles(styles)(Drafts)