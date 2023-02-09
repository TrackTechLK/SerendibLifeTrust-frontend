import React, { Component } from "react";
import { Admin, Delete, Resource, ListGuesser, EditGuesser } from "react-admin";

import drfProvider from "ra-data-django-rest-framework";

const dataProvider = drfProvider("http://localhost:8000");

// import { PostList } from './posts'

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        {/* <Resource
          name="posts"
          list={PostList}
        /> */}
        <Resource name="users" list={<ListGuesser />} edit={EditGuesser} />
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
