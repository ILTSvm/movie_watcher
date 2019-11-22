import axios from 'axios';
import * as React from 'react';
import './index.scss';
import { ILoginProps } from './props';
import { ILoginState } from './state';

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor( props : ILoginProps ){
    super(props);
    this.state = {
      password:'',
      username: '',
    }
  }

  // login
  public login() {
    axios.post('/api/user/login');
  }

  public register() {
    axios.post('/api/user/register',{username:'abc',password:'abc'});
  }
  public handleChange(e: any, key: string) {
    console.log(e.currentTarget.value)
    this.setState({
      [key]: e.currentTarget.value,
    })
  }
  public render() {
    return (
      <div>
        <input 
          className = "acc" 
          onChange = {(e)=>this.handleChange(e,'username')}
        />
        <input type = "password" className = "pwd" />
        <button className = "submit" onClick = {this.login}>登录</button>
        <button className = "submit" onClick = {this.register}>注册</button>
      </div>
    );
  }
}

export default Login;