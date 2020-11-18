import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';


const AdminListPage = ({ fetchAdmins, admins }) => {
  useEffect(() => {
    fetchAdmins();
  }, []);
  return (
    <div>
      <h4>Admins List: </h4>
      <ul>
        {admins.map((admin) => (
          <li key={admin.id}>{admin.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};

