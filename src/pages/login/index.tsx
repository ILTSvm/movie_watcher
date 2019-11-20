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

  public register(){
    axios.post('/api/user/register',{username:'abc',password:'abc'});
  }

  public render() {
    return (
      <div>
        <input className = "acc" />
        <input type = "password" className = "pwd" />
        <button className = "submit" onClick = {this.login}>登录</button>
        <button className = "submit" onClick = {this.register}>注册</button>
      </div>
    );
  }
}

export default Login;