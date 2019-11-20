import { Suspense } from 'react';
import * as React from 'react';


const withSuspense = (Component: any, fallback: any) => {
  return (props: any) => {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default withSuspense;