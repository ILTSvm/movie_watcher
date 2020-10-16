import { Button, Input } from 'antd';
import axios from 'axios';
import * as React from 'react';
import './index.scss';
class Movie extends React.Component{
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
        <label>名称</label>
        <Input type = "name" className = "pwd" />
        <label>细节</label>
        <Input className = "act" />
        <Button type="primary" onClick = {this.login}>查询</Button>
        <Button type="ghost" onClick = {this.register}>新增</Button>
        <Button>修改</Button>
        <Button>删除</Button>
      </div>
    );
  }
}

export default Movie;