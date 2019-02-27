/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import './App.css';
// import { FormattedMessage } from 'react-intl';
// import DatePicker from 'antd/lib/date-picker';
// import Input from 'antd/lib/input';
// // import messages from './messages';
// import A from '../../components/A';
import Header from '../../components/Header/index';
import Wizard from '../../components/Wizard/Wizard';
/* eslint-disable react/prefer-stateless-function */

export default class HomePage extends React.PureComponent {
  // constructor() {
  //   super();
  //   this.state = { users: [] };
  // }

  // async componentDidMount() {
  //   try {
  //     const response = await fetch(
  //       `http://104.236.179.96:9000/api/users?limit=10`,
  //     );
  //     const json = await response.json();

  //     this.setState({ users: json });
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // }

  render() {
    return (
      <div>
        <Header jobId={this.props.jobId} />

        <div
          style={{
            margin: '0 auto',
            width: '100%',
            minWidth: '350px',
            maxWidth: '48%',
            marginTop: '50px',
            marginBottom: '30px',
          }}
        >
          <Wizard />
        </div>

        {/* {this.state.users.map(item => (
          <div key={item.profile.username}>{item.profile.username}</div>
        ))} */}

        {/* <A href="google.com">example link button </A>
        <DatePicker />
        <Input placeholder="Basic usage" /> */}
      </div>
    );
  }
}