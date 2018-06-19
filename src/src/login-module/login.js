import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    render() {
        return (
           <div>
            <form>
                <label id="userName">Name :<input type="text"/></label>
                <label id="password">Password :<input type="password"/></label>
                <input id="Submit" type="submit" value="Submit"/>
            </form>
           </div>
        );
    }
}

export default Login;