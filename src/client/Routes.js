import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import App from '../client/App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AdminsListPage,
        path: '/admins',
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
