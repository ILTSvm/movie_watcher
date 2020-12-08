import { Button, Input } from 'antd';
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
    const { username, password } = this.state;
    axios.post('/api/user/login', { username, password });
  }

  public register() {
    const { username, password } = this.state;
    axios.post('/api/user/register', { username, password });
  }
  public handleChange = (key: string, e: any) => {
    console.log(e.currentTarget.value)
    this.setState({
      [key]: e.currentTarget.value,
    })
  }
  public render() {
    return (
      <div>
        <Input 
          className = "acc" 
          onChange = {this.handleChange.bind(this,'username')}
        />
        <Input 
          type = "password" 
          className = "pwd" 
          onChange = {this.handleChange.bind(this,'password')}
        />
        <Button className = "submit" onClick = {this.login}>登录</Button>
        <Button className = "submit" onClick = {this.register}>注册</Button>
      </div>
    );
  }
}

export default Login;