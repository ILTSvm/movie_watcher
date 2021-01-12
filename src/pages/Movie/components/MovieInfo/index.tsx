import { Image } from 'antd';
import * as React from 'react';
import { IMovieProps } from '../../index.d';

export const MovieInfo = (props: IMovieProps) => {
  const { dec, img, name } = props;
  return <div className="info">
    <p>{ name }</p>
    <p>{ dec }</p>
    <Image src={img} />
  </div>
}