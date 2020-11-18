import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import {Helmet} from 'react-helmet';

const UsersListPage = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Users App</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
      <h5>Users List: </h5>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
};
