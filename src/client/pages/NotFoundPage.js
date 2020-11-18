import React from 'react';

const NotFoundPage = ({staticContext = {}}) => {
    staticContext.notFound = true;
  return (
    <div>
      <h4
        className="center-align"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Opps, Page not found !!!
      </h4>
    </div>
  );
};

export default {
  component: NotFoundPage,
};
