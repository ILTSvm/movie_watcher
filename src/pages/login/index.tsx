import axios from 'axios';
import * as React from 'react';
import './index.scss';


class Login extends React.Component{
  constructor( props : any ){
    super(props);
  }

  // login
  public login(){
    axios.post('/api/user/login');
  }

  public render() {
    return (
      <div className = "App">
        <input className = "acc" />
        <input type = "password" className = "pwd" />
        <button className = "submit" onClick = {this.login}>登录</button>
      </div>
    );
  }
}

export default Login;