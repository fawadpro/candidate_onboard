import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import './FirstStep.css';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
const FormCard = styled.div`
  max-width: 100%;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.41, 0.094, 0.54, 0.07) 0s;
  margin-top: 30px;
`;

class RegisterStepOne extends React.Component {
  constructor(props) {
    super(props);
    this.isUserNameExists = this.isUserNameExists.bind(this);
    this.state = {
      status: '',
      emailError: '',
      // userError: '',
    };
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleFocus = e => {
    this.setState({ status: '' });
    this.setState({
      emailError: '',
      // userError: '',
    });
  };

  // isUserAlreadyExist(e) {
  //   this.setState({ status: 'validating' });
  //   this.setState({ userError: '' });
  //   if (!e.target.value) {
  //     this.setState({ status: 'error' });
  //     this.setState({ userError: 'Please Enter an Username' });
  //     return false;
  //   }
  //   fetch(`http://138.197.207.41:9000/api/auth/isuseralreadyexists`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username: e.target.value,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(res => {
  //       if (res.user) {
  //         this.setState({ status: 'error' });
  //         this.setState({
  //           userError:
  //             'Username already exist, Please choose an another username',
  //         });
  //       } else {
  //         this.setState({ status: 'success' });
  //       }
  //       console.warn(res);
  //     })
  //     .done();
  // }

  isUserNameExists(e) {
    this.setState({ status: 'validating' });
    this.setState({ emailError: '' });
    if (!e.target.value || !this.validateEmail(e.target.value)) {
      this.setState({ status: 'error' });
      this.setState({ emailError: 'Please valid email address.' });
      return false;
    }
    fetch(`http://138.197.207.41:9000/api/auth/isuserexists`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: e.target.value,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.user) {
          this.setState({ status: 'error' });
          this.setState({
            emailError: 'Email already exists, please choose another email.',
          });
          return false;
        }
        this.setState({ status: 'success' });
        console.warn(res);
        return true;
      });
    return true;
  }

  render() {
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <FormCard>
          <FormItem>
            {getFieldDecorator('fullName', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Full Name!',
                  whitespace: true,
                },
              ],
            })(<Input placeholder="Full Name" />)}
          </FormItem>
          {/* <FormItem>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Username!',
                    whitespace: true,
                  },
                ],
              })(
                <Input
                  placeholder="Username"
                  // onBlur={this.isUserAlreadyExist.bind(this)}
                  // onFocus={this.handleFocus}
                  // onChange={this.onFocus}
                />,
              )}
            </FormItem> */}

          <FormItem
            validateStatus={this.state.status}
            hasFeedback
            help={this.state.emailError}
          >
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(
              <Input
                onBlur={this.isUserNameExists}
                onFocus={this.handleFocus}
                onChange={this.onFocus}
                placeholder="Email"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ],
            })(<Input type="password" placeholder="Password" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('location', {
              rules: [
                {
                  required: true,
                  message: 'Please input your location!',
                },
              ],
            })(<Input type="text" placeholder="Location" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('lastPosition', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Last Position!',
                  whitespace: true,
                },
              ],
            })(<Input placeholder="Present or last position" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('lastCompany', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Last Company!',
                  whitespace: true,
                },
              ],
            })(<Input placeholder="Present or last Company" />)}
          </FormItem>
        </FormCard>
      </div>
    );
  }
}
export default RegisterStepOne;