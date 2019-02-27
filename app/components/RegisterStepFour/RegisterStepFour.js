import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Select } from 'antd';
import styled from 'styled-components';
const FormItem = Form.Item;
const SkillText = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 2rem 0 1rem 0;
  display: block;
  text-align: -webkit-auto;
`;
const FormCard = styled.div`
  max-width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(230, 230, 230);
  border-image: initial;
  padding: 30px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 10px;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.41, 0.094, 0.54, 0.07) 0s;
  margin-top: 30px;
`;

const Option = Select.Option;
const children = [];
const defaultSkills = [];
export default class RegisterStepFour extends Component {

  constructor(props){
    super(props);
    this.validate = this.validate.bind(this);
  }
  
  validate = (rule, value, callback) => {
    const form = this.props.form;
    console.log(value);
    if (value.length < 3) {
       callback('Please Select at least 3 Skills');
   } else {
       callback();
     }
 // }
}
  componentWillMount() {
    this.getAllSkills();
    //this.getUserSkills();
  }
  getUserSkills() {
    fetch(`http://138.197.207.41:9000/api/app/skills`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(skills => {
        skills.skillsWithChilds.map(elem => {
          defaultSkills.push[elem];
        });
      });
  }
  getAllSkills() {
    fetch(`http://138.197.207.41:9000/api/app/skills`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(skills => {
        skills.skillsWithChilds.map((elem, index) => {
          // console.log(name);
          children.push(<Option key={elem.name}>{elem.name}</Option>);
        });
      });
  }
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <div>
        <FormCard>

            <SkillText>
              What are you good at ? Select at least 3 skills.
            </SkillText>

            <FormItem>
              {getFieldDecorator('skills', {
                rules: [
                  {
                    required: true,
                    message: 'Please select skillset!',
                  },
                  {
                    validator: this.validate,
                  }
                ],
              })(
                <Select
                  mode="tags"
                  style={{ width: '100%' }}
                  defaultValue={defaultSkills}
                >

                  {children}
                </Select>,
              )}
            </FormItem>
        </FormCard>
      </div>
    );
  }
}
