import React from 'react';
import {Helmet} from 'react-helmet';

const HomePage = () => {
  return (
    <div
      className="center-align"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Helmet>
        <title>Users Management</title>
        <meta property="og:title" content="Users Management" />
        <meta property="og:description" content="Users Management is web application. Admin can see how many users registration and working here.Admin can remove and add people. Admin can choose other admin and set position" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://crowded-uploads.imgix.net/community.neptune-software.com-6455d98355fba40800a247736ee60a4412b4b43f.png" />
      </Helmet>

      <h3>Hello, Welcome!!!</h3>
      <p>Try out these outstanding features</p>
    </div>
  );
};

export default { component: HomePage };
