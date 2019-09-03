import * as React from 'react';

import './index.scss';


class Login extends React.Component{
  constructor( props : any ){
    super(props);
  }

  //login
  public login(){
    const {acc , pwd} = this.refs
    
  }

  public render() {
    return (
      <div className = "App">
        <input className = "acc" ref = "acc"/>
        <input type = "password" className = "pwd" ref = "pwd"/>
        <button className = "submit" onClick = {this.login}></button>
      </div>
    );
  }
}

export default Login;