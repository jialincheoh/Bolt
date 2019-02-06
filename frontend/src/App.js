import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Auth from "./Auth"
import Util from "./Util"

class App extends Component {

	state = {
		user: null
	}

	componentDidMount(){
		Auth.checkAuthentication((err, authResult) => {
			if (err) { return Util.error(err); }
			if (authResult) {
				Auth.getProfile((err, user) => {
					if (err) { return Util.error(err); }
					this.setState({ user })	
				});
			}
		})
	}

  render() {
  	const { user } = this.state;
    return (
      <div className="App">
        <Form user={user} />
      </div>
    );
  }
}

export default App;
