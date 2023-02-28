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
import SponsorCreate from './resourses/student/SponsorCreate';
import SponsorEdit from './resourses/student/SponsorEdit';
import SponsorList from './resourses/student/SponsorList';
import { BACKEND_URL } from './constants';

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
    console.log({BACKEND_URL: process.env.REACT_APP_BACKEND_URL})
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
          list={<ListGuesser />}
          edit={EditGuesser}
        />
        <Resource name='payments' list={<ListGuesser />} edit={EditGuesser} />
      </Admin>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
