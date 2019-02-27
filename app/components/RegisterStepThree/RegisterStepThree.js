import React, { component } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import './stylethree.css';
import { Form, Upload, Button, Icon } from 'antd';
// import reqwest from 'reqwest';
const Dragger = Upload.Dragger;
const FormItem = Form.Item;
const PhotoText = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 2rem 0 1rem 0;
  display: block;
  text-align: -webkit-auto;
`;

class RegisterStepThree extends React.Component {
  // handleUpload = e => {
  //   const reader = new FileReader();
  //   const storeUser = JSON.parse(localStorage.getItem('user'));
  //   reader.onload = function(upload) {
  //     console.log(upload.target.result);
  //     fetch(`http://138.197.207.41:9000/api/s3/uploadcv`, {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       method: 'POST',
  //       body: JSON.stringify({
  //         userId: storeUser._id,
  //         type: 'employee',
  //         content: upload.target.result,
  //         key: 'e.file.name',
  //         oldKey: '',
  //       }),
  //     })
  //       .then(response => response.json())
  //       .then(res => {
  //         console.warn(res);
  //       })
  //       .done();
  //   };

  //   reader.readAsDataURL(e.file.originFileObj);
  // };

  render() {
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <PhotoText>Select a Resume to Upload</PhotoText>

          <FormItem>
            {getFieldDecorator('resume', {
              rules: [
                {
                  required: true,
                  message: 'Please upload Resume!',
                },
              ],
            })(
              <Dragger ngf-pattern=" .pdf,.doc,.docx "  accept=".pdf,.doc,.docx">
              <p className="ant-upload-drag-icon">
                <Icon type="upload" />
              </p>
              <p className="ant-upload-text">
                Click or drag Resume to this area to upload
              </p>
            </Dragger>,
            )}
          </FormItem>

          {/* <PhotoText>Select a Video to Upload</PhotoText>
          <FormItem>
            {getFieldDecorator('video', {
              rules: [
                {
                  required: true,
                  message: 'Please upload video!',
                },
              ],
            })(
              <Upload>
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>,
            )}
          </FormItem> */}
       
      </div>
    );
  }
}
export default RegisterStepThree;
