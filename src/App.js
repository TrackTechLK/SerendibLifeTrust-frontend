import React, { Component } from 'react';
import {
  fetchUtils,
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
} from 'react-admin';
import './App.css';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import drfProvider from './utils/Dataprovider/index.ts';
import { authProvider } from './utils/authProvider';
import theme from './theme';
import LoginPage from './components/login';
import StudentList from './resourses/student/StudentList';
import StudentEdit from './resourses/student/StudentEdit';
import StudentCreate from './resourses/student/StudentCreate';
import SponsorCreate from './resourses/sponsor/SponsorCreate';
import SponsorEdit from './resourses/sponsor/SponsorEdit';
import SponsorList from './resourses/sponsor/SponsorList';
import { BACKEND_URL } from './constants';
import PaymentEdit from './resourses/payment/PaymentEdit';
import PaymentList from './resourses/payment/PaymentList';
import ScholarshipList from './resourses/scholarship/ScholarshipList';
import ScholarshipEdit from './resourses/scholarship/ScholarshipEdit';
import ScholarshipCreate from './resourses/scholarship/ScholarshipCreate';
import PaymentCreate from './resourses/payment/PaymentCreate';
import StudentShow from './resourses/student/StudentShow';
import ScholarshipShow from './resourses/scholarship/ScholarshipShow';
import SponsorShow from './resourses/sponsor/SponsorShow';
import PaymentShow from './resourses/payment/PaymentShow';
import CustomLayout from './components/CustomLayout';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const { access } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `Bearer ${access}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = drfProvider(BACKEND_URL, httpClient);

class App extends Component {
  render() {
    return (
      <Admin
        loginPage={LoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
        theme={theme}
        layout={CustomLayout}
      >
        <Resource name='users' list={<ListGuesser />} edit={EditGuesser} />
        <Resource
          icon={PeopleIcon}
          name='students'
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          icon={AccountBalanceIcon}
          name='sponsors'
          list={SponsorList}
          edit={SponsorEdit}
          create={SponsorCreate}
          show={SponsorShow}
        />
        <Resource
          icon={SchoolIcon}
          name='scholarships'
          list={ScholarshipList}
          edit={ScholarshipEdit}
          create={ScholarshipCreate}
          show={ScholarshipShow}
        />
        <Resource
          icon={PaymentIcon}
          name='payments'
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
      </Admin>
    );
  }
}

export default App;
