import React from 'react'
import './Form.css'
import bootstrapLogoImg from './images/bootstrap-solid.svg'
import Auth from './Auth';

class Form extends React.Component {
  render () {
    const { user } = this.props;
    return (
       <div className="form-signin">
        <img className="mb-4" src={bootstrapLogoImg} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">{ user ? "Welcome!" : "Please sign in" }</h1>
        
        <div className="loginContainer"> 
        { user ?
          (<div>
            <p>You are logged in as {user.name || user.email}</p>
            <button className="btn btn-lg btn-primary btn-block" onClick={e => Auth.logout()}>Log out</button>
            </div>)
          :
          <button className="btn btn-lg btn-primary btn-block" onClick={e => Auth.login()}>Login with Auth0</button>
        }

        </div>
        <p className="mt-5 mb-3 text-muted">&copy; Alex Willis, Nathan Peercy, Jia Lin Cheoh, Sam Klarquist, Siddharth Shah 2019</p>
      </div>
    )
  }
}

export default Form;