import React from 'react'
import Menubar from './Menubar.js'
import Home from './Home.js'
import SentMemos from './SentMemos.js'
import RecievedMemos from './RecievedMemos.js'
import Drafts from './Drafts.js'
import Typography from '@material-ui/core/Typography'

class Homepage extends React.Component{
    state={ page:1,}
    render(){
        return(<div>
            
            <Menubar/>
            <Typography style={{ margin: 20  }}>Welcome User</Typography>
         <div> {
             (()=>{ switch (this.state.page) {
                case 1:
                return <div><Home/></div>
                case 2:
                return <div><SentMemos/></div>
                case 3:
                return <div><RecievedMemos/></div>
                case 4:
                return <div><Drafts/></div>
                default:
                return <div><p>aaaaaaa</p></div>
          }})()} </div>
        </div>)
    }
}
export default Homepage