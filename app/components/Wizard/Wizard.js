import React from 'react';
import 'antd/dist/antd.css';
import { Steps, Form, Button, Card, Icon, message } from 'antd';
import { SubText, GeneralText, ButtonWrapper, Wrapper } from './WizardStyles';
import RegisterStepOne from '../RegisterStepOne/RegisterStepOne';
import RegisterStepTwo from '../RegisterStepTwo/RegisterStepTwo';
import RegisterStepThree from '../RegisterStepThree/RegisterStepThree';
import RegisterStepFour from '../RegisterStepFour/RegisterStepFour';
import Success from '../Successful/Success';

const success = () => {
  message.success('Congratulations! Your account has been created');
};

const errormessage = () => {
  message.error('Something Went Wrong! Please try again');
};

const Step = Steps.Step;
console.log(this);
class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      disabled: 0,
      initialText: 'Next',
      loading: false,
    };
  }

  steps = [
    {
      index: 0,
      title: 'General Information',
      subtext:
        'In order to apply for this position , we need to complete 4 steps',
      content: (
        <RegisterStepOne
          getFieldDecorator={this.props.form.getFieldDecorator}
        />
      ),
    },
    {
      index: 1,
      title: 'Upload Photo',
      content: (
        <RegisterStepTwo
          getFieldDecorator={this.props.form.getFieldDecorator}
        />
      ),
    },
    {
      index: 2,
      title: 'Upload Resume',
      content: (
        <RegisterStepThree
          getFieldDecorator={this.props.form.getFieldDecorator}
        />
      ),
    },
    {
      index: 3,
      title: 'Add Skills',
      subtext: 'What are you good at?',
      content: (
        <RegisterStepFour
          getFieldDecorator={this.props.form.getFieldDecorator}
        />
      ),
    },
  ];

  next() {
    this.setState(prevState => ({ current: prevState.current + 1 }));
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (this.state.current === 0 || this.state.current === 3)
          this.setState({ initialText: 'Saving...' });
        else this.setState({ initialText: 'Uploading...' });
        const userOject = {
          profile: {
            type: 'employee',
            screen: 'Step0',
          },
          ...values,
        };
        const user = JSON.parse(localStorage.getItem('user'));
        switch (this.state.current) {
          case 0:
            this.setState({ loading: true });
            // code run for step 1
            fetch('http://138.197.207.41:9000/api/auth/createuser', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user: userOject,
              }),
            })
              .then(response => response.json())
              .then(createUserRes => {
                this.setState({ loading: false });
                this.setState({ initialText: 'Next' });
                if (createUserRes.error) {
                  console.warn(createUserRes);
                } else if (createUserRes && createUserRes.user) {
                  success();
                  console.warn(createUserRes);
                  localStorage.setItem(
                    'user',
                    JSON.stringify(createUserRes.user),
                  );
                  const modifier = {
                    id: createUserRes.user._id,
                    type: createUserRes.user.profile.type,
                    profile: {
                      fullName: values.fullName,
                      position: values.lastPosition,
                      username: values.username,
                      location: values.location,
                      company: values.lastCompany,
                      photo: '',
                      screen: 'Step1',
                    },
                  };
                  fetch(`http://138.197.207.41:9000/api/auth/user/update`, {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      id: createUserRes.user._id,
                      modifier,
                    }),
                  })
                    .then(response => response.json())
                    .then(res => {
                      if (res.error) {
                        errormessage(res.error);
                      } else {
                        console.warn(res);
                        this.next();
                      }
                    })
                    .done();
                }
              });
            break;
          case 1:
            // code run for step 2
            if (
              !err &&
              values.picture &&
              values.picture.fileList.length > 0
            ) {
              this.setState({ loading: true });
              this.setState({ disabled: 1 });
              const reader = new FileReader();
              const storeUser = JSON.parse(localStorage.getItem('user'));
              reader.onload = upload => {
                fetch(`http://138.197.207.41:9000/api/s3/uploadtoaws`, {
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  body: JSON.stringify({
                    userId: storeUser._id,
                    type: 'employee',
                    content: upload.target.result,
                    key: `${storeUser._id}_${Math.random()}`,
                    oldKey: '',
                  }),
                })
                  .then(response => response.json())
                  .then(res => {
                    if (res.error) {
                      console.warn(res);
                    } else {
                      this.setState({ initialText: 'Next' });
                            this.setState({ loading: false });
                            this.setState({ disabled: 0 });
                            console.warn(res);
                            this.next();
                      localStorage.setItem('photo', JSON.stringify(res.user));
                    }
                  })
                  .done();
              };
              reader.readAsDataURL(values.picture.file.originFileObj);

              // video upload
              // const videoReader = new FileReader();
              // const videostored = JSON.parse(localStorage.getItem('user'));
              // videoReader.onload = upload => {
              //   fetch(`http://138.197.207.41:9000/api/s3/user/profilevideo`, {
              //     headers: {
              //       Accept: 'application/json',
              //       'Content-Type': 'application/json',
              //     },
              //     method: 'POST',
              //     body: JSON.stringify({
              //       userId: videostored._id,
              //       type: 'employee',
              //       content: upload.target.result,
              //       key: `${videostored._id}_${Math.random()}`,
              //       oldKey: '',
              //     }),
              //   })
              //     .then(response => response.json())
              //     .then(res => {
              //       this.setState({ initialText: 'Next' });
              //       this.setState({ loading: false });
              //       this.setState({ disabled: 0 });
              //       console.warn(res);
              //       this.next();
              //     });
              // };

              // videoReader.readAsDataURL(values.video.file.originFileObj);

              if (user == null) {
                errormessage();
              }
            } else {
              alert('Please Select Photo or video ');
            }

            break;
          case 2:
            // code run for step 3
            if (!err && values.resume && values.resume.fileList.length > 0) {
              this.setState({ loading: true });
              this.setState({ disabled: 1 });
              const docReader = new FileReader();
              const DocStored = JSON.parse(localStorage.getItem('user'));
              docReader.onload = upload => {
                fetch(`http://138.197.207.41:9000/api/s3/uploadcv`, {
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  body: JSON.stringify({
                    userId: DocStored._id,
                    type: 'employee',
                    content: upload.target.result,
                    key: `${DocStored._id}_${Math.random()}`,
                    oldKey: '',
                  }),
                })
                  .then(response => response.json())
                  .then(res => {
                    this.setState({ loading: false });
                    if (res.error) {
                      console.warn(res);
                    } else {
                      console.warn(res);
                      this.next();
                    }
                  })
                  .done();
              };
              docReader.readAsDataURL(values.resume.file.originFileObj);
              if (user == null) {
                errormessage();
              }
            } else {
              alert('Please select a CV ');
            }
            break;
          case 3:
            // code run for step 4
            this.setState({ loading: true });
            this.setState({ disabled: 1 });

            console.log(this.props.jobId, user._id);

            fetch(`http://138.197.207.41:9000/api/auth/user/updateskills`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id: user._id,
                type: user.profile.type,
                modifier: {
                  'profile.skills': values.skills,
                },
              }),
            })
              .then(response => response.json())
              .then(res => {
                this.setState({ loading: false });
                if (res.error) {
                  console.warn(res);
                } else {
                  console.warn(res);
                  fetch(`http://138.197.207.41:9000/api/matchs/create`, {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      userId: user._id,
                      action: 'like',
                      jobId: this.props.jobId,
                    }),
                  })
                    .then(response => response.json())
                    .then(likeRes => {
                      console.log(likeRes);
                    });
                  // this.afterDone();

                  this.next();
                }
              })
              .done();
            break;
          default:
        }
      }
    });
  };

  prev() {
    this.setState(prevState => ({ current: prevState.current - 1 }));
  }

  getStep = props => this.steps[this.state.current].content;

  render() {
    console.log(this.props);
    if (this.state.current <= 3) {
      const { current } = this.state;
      const { getFieldDecorator } = this.props.form;
      return (
        <Wrapper>
          <div>
            <GeneralText>{this.steps[current].title}</GeneralText>
            <div>
              <Steps
                current={current}
                style={{ marginBottom: '25px', minWidth: '200px' }}
              >
                {this.steps.map((item, index) => (
                  <Step
                    key={index.toString()}
                    small="small"
                    title={
                      current === item.index && this.state.loading
                        ? 'In Progress'
                        : null
                    }
                    icon={
                      current === item.index && this.state.loading ? (
                        <Icon type="loading" />
                      ) : null
                    }
                  />
                ))}
              </Steps>
            </div>
            {this.state.current <= 2 ? (
              <SubText>{this.steps[0].subtext}</SubText>
            ) : (
              <SubText>{this.steps[3].subtext}</SubText>
            )}

            <Card style={{ borderRadius: 5 }}>
              <Form onSubmit={this.handleSubmit}>
                <div className="steps-content">
                  {this.getStep(getFieldDecorator)}
                </div>
                <div className="steps-action">
                  <ButtonWrapper>
                    {current < this.steps.length - 1 && (
                      <Button
                        disabled={this.state.disabled}
                        type="primary"
                        htmlType="submit"
                        style={{
                          background: '#ff9700',
                          fontWeight: 'bold',
                          border: 'none',
                          float: 'center',
                        }}
                        loading={this.state.loading}
                      >
                      {this.state.initialText}
                      </Button>
                    )}
                    {current === this.steps.length - 1 && (
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          background: '#ff9700',
                          fontWeight: 'bold',
                          border: 'none',
                        }}
                      >
                        Done
                      </Button>
                    )}
                    {/* {current > 0 && (
                  <Button
                    className="preButton"
                    style={{ float: 'left' }}
                    onClick={() => this.prev()}
                    disabled
                  >
                    Previous
                  </Button>
                )} */}
                  </ButtonWrapper>
                </div>
              </Form>
            </Card>
          </div>
        </Wrapper>
      );
    }
    return <Success />;
  }
}
export default Form.create()(Wizard);