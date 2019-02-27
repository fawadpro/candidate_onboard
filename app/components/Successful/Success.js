import React, { component } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import A from '../../components/A';
import  ProfileView from '../../components/ProfileView/ProfileView';
const Btn =styled.div`
text-decoration:none;
margin-top:20px;
margin-left:210px;
margin-bottom:60px;
display: inline-block;
text-align: center;
color: #fff;
background: #373a43;
text-transform: uppercase;
border-radius: 0.2rem;
font-size: 20px;
font-weight: bolder;
padding: 1rem 3rem;
cursor:pointer;
`

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

const PhotoText = styled.div`
  font-size: 26px;
  font-weight: bold;
  padding: 2rem 0 1rem 0;
  display: block;
  text-align: center;
`;

class Success extends React.Component {
  constructor(props){
    super(props);
    this.profileView= this.profileView.bind(this);
    this.state = {
      initial:0
    }
  }

  // componentDidMount = () =>{
  //   fetch("http://138.197.207.41:9000/api/joblistings/CTcG9kN8kGtsLvtbg").then(res=>res.json()).then(data=>{
   
  //     this.setState({name:data.company.name});

  // }).catch(error=>{
  //     console.log(error);
  // })
  // }
  profileView(e){
    e.preventDefault();
    this.setState({initial:1})
  }
  render() {
    const {name} = this.state||'';
    console.log(this.state);
    if(this.state.initial === 1){
      return (<ProfileView/>);
    }else{
    return (
      <div>
        <FormCard>
          <PhotoText>
            You have successfully applied for the Corporate Account Managers
 at NTUC
          </PhotoText>
          <br />
          <p style={{ textAlign: 'center', fontSize: '16px' }}>
            For view your Match and find more <br />
            and Find More Jobs, Download our App
          </p>
          <div style={{ marginLeft: '150px', marginTop: '40px' }}>
            <a
              href={
                'https://play.google.com/store/apps/details?id=com.id2uqjq1fqcefobm70mv'
              }
            >
              <img
                src={'http://blonk.co/cob/img/android-btn.png'}
                alt="react-boilerplate - Logo"
                style={{ maxWidth: '150px' }}
              />
            </a>

            <a
              href={
                'https://itunes.apple.com/app/blonk-candidate/id1274976762?l=en&mt=8'
              }
            >
              <img
                src={'http://blonk.co/cob/img/ios-btn.png'}
                alt="react-boilerplate - Logo"
                style={{ maxWidth: '150px', marginLeft: '5px' }}
              />
            </a>
          </div>
        </FormCard>

        <Btn onClick={this.profileView}>
          View Profile
        </Btn>

      </div>
    );
            }
  }
}
export default Success;
