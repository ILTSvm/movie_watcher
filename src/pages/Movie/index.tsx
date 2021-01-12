import { Button, Input } from 'antd';
import axios from 'axios';
import * as React from 'react';
import { MovieInfo } from './components';
import { IMovieProps, IMovieState } from './index.d';
import './index.scss';
class Movie extends React.Component<IMovieState, IMovieProps>{
  constructor( props : IMovieProps ){
    super(props);
    this.state = {
      dec: '',
      img: '',
      name: '123',
    }
  }

  // login
  public getMovieList(){
    axios.post('/api/movie/info', { name: '肖申克的救赎' });
  }

  public register(){
    axios.post('/api/user/register', {username:'abc',password:'abc'});
  }

  public render() {
    return (
      <div>
        <label>名称</label>
        <Input type = "name" className = "pwd" />
        <label>细节</label>
        <Input className = "act" />
        <Button type="primary" onClick = {this.getMovieList}>查询</Button>
        <Button type="ghost" onClick = {this.register}>新增</Button>
        <Button>修改</Button>
        <Button>删除</Button>
        <MovieInfo 
          { ...this.state }
        />
      </div>
    );
  }
}

export default Movie;