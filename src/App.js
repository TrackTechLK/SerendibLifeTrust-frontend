import React, { Component } from 'react';
import {
  fetchUtils,
  Admin,
  Delete,
  Resource,
  ListGuesser,
  EditGuesser,
} from 'react-admin';
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
    console.log({ BACKEND_URL: process.env.REACT_APP_BACKEND_URL });
    return (
      <Admin
        loginPage={LoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
        theme={theme}
      >
        <Resource name='users' list={<ListGuesser />} edit={EditGuesser} />
        <Resource
          name='students'
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
        />
        <Resource
          name='sponsors'
          list={SponsorList}
          edit={SponsorEdit}
          create={SponsorCreate}
        />
        <Resource
          name='scholarships'
          list={ScholarshipList}
          edit={ScholarshipEdit}
          create={ScholarshipCreate}
        />
        <Resource
          name='payments'
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
        />
      </Admin>
    );
  }
}

export default App;
