import React from 'react';


export default function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props}) {
    if (!isLoading) return <Component {...props} />
    return (
        <p style={{ fontSize: '25px' }}>
          Loading!
        </p>
    );
  };
}