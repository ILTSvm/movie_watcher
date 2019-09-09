import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Home extends React.Component{
  constructor( props: any){
    super(props);
  }

  public render() {
    return (
      <div className = "App">
        <Link to="/login">登录</Link>
      </div>
    );
  }
}

export default Home;