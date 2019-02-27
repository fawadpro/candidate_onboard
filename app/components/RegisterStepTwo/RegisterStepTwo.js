import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import './styletwo.css';
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

const SuggestionArea=styled.div`
text-align:center;
color:#012653;
margin-bottom: 0.5em;
margin-top:10px;
`;
const props = {
  action: '',
  listType: 'picture',
};

const props2 = {
  action: '',
  listType: 'video',
};
class RegisterStepTwo extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this)
    this.state = {
      video:'',
      isVideoUploaded:false
    }
  }
  // handleUpload = e => {
  //   const reader = new FileReader();
  //   const storeUser = JSON.parse(localStorage.getItem('user'));
  //   reader.onload = function(upload) {}
  //     fetch(`http://138.197.207.41:9000/api/s3/uploadtoaws`, {
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

  onChange(e){
    let fileReader = new FileReader();
    fileReader.onload = upload => {
      console.log(upload.target.result);
      this.setState({video:upload.target.result});
      console.log(this.state)
    }
    fileReader.readAsDataURL(e.file.originFileObj);

  }
  render() {
    
    const { getFieldDecorator } = this.props;
    
    return (
      <div>
        <PhotoText>Select a Photo to Upload</PhotoText>

        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('picture', {
              rules: [
                {
                  required: true,
                  message: 'Please upload picture!',
                },
              ],
            })(
              <Dragger {...props} accept="image/*">
                <p className="ant-upload-drag-icon">
                  <Icon type="upload" />
                </p>
                <p className="ant-upload-text">
                  Click or drag photo to this area to upload
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
              <Dragger onChange={this.onChange} accept="video/*">
              <p className="ant-upload-drag-icon">
                <Icon type="upload" />
              </p>
              <p className="ant-upload-text">
                Click or drag Video to this area to upload
              </p>
            </Dragger>,
            )}
            { this.state.video ? <video width="450" height="280" style={{width:'100%',height:'auto'}} src={this.state.video} controls/>  : null }
          </FormItem> */}
        </Form>
       <SuggestionArea>
         <b>Suggestions?</b>
         <p style={{marginBottom:'0.3em',fontFamily:'Lato,sans-serif',fontSize:'16px'}}>Where do you come from?</p>
         <p style={{marginBottom:'0.3em',fontFamily:'Lato,sans-serif',fontSize:'16px'}} >What do you enjoy most?</p>
         <p  style={{marginBottom:'0.3em',fontFamily:'Lato,sans-serif',fontSize:'16px'}}>What are you best at?</p>
         <p  style={{marginBottom:'0.3em',fontFamily:'Lato,sans-serif',fontSize:'16px'}}>What about your character?...</p>
       </SuggestionArea>
      </div>
    );
  }
}
export default RegisterStepTwo;
